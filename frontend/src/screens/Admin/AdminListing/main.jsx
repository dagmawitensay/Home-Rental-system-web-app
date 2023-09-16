import React from "react";
import AdminListing from "./body";

export default function Body() {
  const handleLogout = () => {
    localStorage.removeItem('user')
  }
  
  return (
    <main className=" row m-auto">
      <h1 className="text-center m-5">Available houses for approval!</h1>
      <div className=" row container-fluid">
        <AdminListing />
      </div>
    </main>
  );
}
