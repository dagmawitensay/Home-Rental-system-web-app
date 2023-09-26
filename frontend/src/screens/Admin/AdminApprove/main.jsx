import React from "react";
import HouseDetail from "./house";
import { useParams } from "react-router";

export default function Body() {
  const { id } = useParams();
  return (
    <main className=" row m-auto">
      <div className=" row container-fluid my-5">
        {/* <div className="row col-sm-12 headerr bg-secondary">
          <h4 className="col-sm-2">No</h4>
          <h4 className="col-sm-4">License Photo</h4>
          <h4 className="col-sm-3">Owner's Name</h4>
        </div> */}
        <HouseDetail id={id} />
      </div>
    </main>
  );
}
