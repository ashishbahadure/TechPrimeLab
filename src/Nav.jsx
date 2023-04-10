import React from "react";


function Nav(){
    return(
        <>
          <div class="container-fluid">
         <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/home" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="/dash" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/project_listing" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Project_listing</span> </a>
                        
                    </li>
                    <li>
                        <a href="/create_project" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Create_project</span></a>
                    </li>
                    <li>
                        <a href="/" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Log out</span></a>
                    </li>
                </ul>
                </div>
        </div>
                
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p-5 bg-info">
                    </div>
                    <div className="col-md-12 bg-danger p-5">
                    <div className="row">
                        <div className="col-md-9">
                            <input placeholder="Enter Projecct Theme"/>
                        </div>
                        <div className="col-md-3 ">
                            <button className="btn btn-info">save Project</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <label>Reason</label><br/>
                            <input />
                        </div>
                        <div className="col-md-4">
                            <label>Type</label><br/>
                            <input />
                        </div>
                        <div className="col-md-4">
                            <label>Division</label><br/>
                            <input />
                        </div><div className="col-md-4">
                            <label>Category</label><br/>
                            <input />
                        </div>
                        <div className="col-md-4">
                            <label>Priority</label><br/>
                            <input />
                        </div>
                        <div className="col-md-4">
                            <label>Department</label><br/>
                            <input />
                        </div>
                        <div className="col-md-4">
                            <label>Start Dates as per Prprject Plan</label><br/>
                            <input type="date"/>
                        </div>
                        <div className="col-md-4">
                            <label>End Dates as per Prpject Plan</label><br/>
                            <input type="date"/>
                        </div>
                        <div className="col-md-4">
                            <label>Location</label><br/>
                            <input  type="text"/>
                        </div>
                        <div className="col-md-2 offset-md-8 mt-4 bg-success">
                            <span>status:Registered</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
      

      
        </div>
        </div>
        </>
    )
}
export default Nav;