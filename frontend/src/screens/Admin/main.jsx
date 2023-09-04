import React from "react";

export default function Body() {
  const handleLogout = () => {
    localStorage.removeItem('user')
  }
  
  return (
    <main className=" row m-auto">
      <h1 className="text-center m-5">Available houses for approval!</h1>
      <div className=" row container-fluid">
        <div className="row col-sm-12 headerr bg-secondary ms-3">
          <h4 className="col-sm-2">No</h4>
          <h4 className="col-sm-4">License Photo</h4>
          <h4 className="col-sm-3">Owner's Name</h4>
        </div>
        <div className="requests" id="requests"></div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}
