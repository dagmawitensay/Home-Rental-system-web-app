import { User } from "@prisma/client";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "../Decorators/role.enum";
import { ROLES_KEY, Roles } from '../Decorators/role.auth';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user= request.user
    // console.log(request.user.role)
    // ['admin', 'lesser'];
const myrole=requiredRoles.some((role) => user.role === role)
console.log(user.role)

console.log(requiredRoles)
console.log((role) => {return user.role?.includes(role)})
return myrole;

    // return requiredRoles.some((role) => user.role?.includes(role));
  }
}
