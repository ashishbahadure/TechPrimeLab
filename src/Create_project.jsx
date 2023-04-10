import axios from 'axios';
import React from 'react'
class Create_project extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            start_date:"",
            end_date:"",
            reason:"",
            type:"",  
            division:"",
            category:"",
            priority:"",
            dept:"",
            location:"",
            status:""
        }
    }
    changename=(event)=>{
        this.setState({
            name:event.target.value,
        })
    }    
    changereason=(event)=>{
        this.setState({
            reason:event.target.value,
        })
    }
    changetype=(event)=>{
        this.setState({
            type:event.target.value,
        })
    }
    changedivision=(event)=>{
        this.setState({
            division:event.target.value,
        })
    }
    changecategory=(event)=>{
        this.setState({
            category:event.target.value,
        })
    }
    changepriority=(event)=>{
        this.setState({
            priority:event.target.value,
        })
    }
    changedept=(event)=>{
        this.setState({
            dept:event.target.value,
        })
    }
    changelocation=(event)=>{
        this.setState({
            location:event.target.value,
        })
    }
    
    changestatus=(event)=>{
        this.setState({
             status:event.target.value,
        })
    }
    changestart_date=(event)=>{
        this.setState({
             start_date:event.target.value,
        })
    }
    changeend_date=(event)=>{
        this.setState({
             end_date:event.target.value,
        })
    }
    subdata=async (event)=>{
        event.preventDefault();
        await axios.post('http://localhost:3000/user',this.state);
        alert("successfuly Inserrt data")
    }
render(){
  return (
    <> 
        <div class="container-fluid">
         <div class="row flex-nowrap">
        <div class="col-md-1  px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/home" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="/dash" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline"><i class="fa-solid fa-gauge"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="/project_listing" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline"><i class="fa-solid fa-bars-progress"></i></span> </a>
                        
                    </li>
                    <li>
                        <a href="/create_project" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline"><i class="fa-solid fa-plus"></i></span></a>
                    </li>
                    <li>
                        <a href="/" class="nav-link px-0 align-middle mt-5">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline"><i class="fa-solid fa-right-from-bracket"></i></span></a>
                    </li>
                </ul>
                </div>
        </div>
                
            
    <form onSubmit={this.subdata}>
    <div className='container'>
    <div className='row'>
    <div className='col-md-12 'style={{background:"#046fd2  "}}>
    <div className='row'>
    <div className='col-md-2 mt-4'><span className=' mt-4 mb-3 text-white '>Create_project</span></div>
   <div className=' col-md-8 text-center'> <img src='https://cdn-icons-png.flaticon.com/512/4882/4882341.png' className='mt-2 mb-2 'style={{height:80,width:80}}/></div>
   </div>
    </div>
    </div>
    <div className='row  mb-5'>
    <div className='col-md-8 mt-3 '>
            <input type='text' className='w-100 h-100' placeholder='Enter Project Theme' value={this.state.name} onChange={this.changename}/><br/>
        
        </div>
        <div className='col-md-4 mt-4 text-center'>
            <button className='btn btn-warning'>save</button>
        </div>
     


        <div className='col-md-4 mt-5'>
            <div className=''>
                <label>Reason</label><br/>
                <select className='w-75 'style={{height:40}} value={this.state.reason} onChange={this.changereason}>
                    <option>Business</option>
                    <option>Dealership</option>
                    <option>Transport</option>
                </select>
            </div>
        </div>
        <div className='col-md-4 mt-5'>
            <div className='border-0'>
                <label>Type</label><br/>
                <select className='w-75 'style={{height:40}} value={this.state.type} onChange={this.changetype}>
                    <option>Internal</option>
                    <option>External</option>
                    <option>vendor</option>
                </select>
            </div>
        </div>
        <div className='col-md-4 mt-5'>
            <div className='border-0'>
                <label>Division</label><br/>
                <select className='w-75 'style={{height:40}} value={this.state.division} onChange={this.changedivision}>
                    <option>Compressor</option>
                    <option>Filters</option>
                    <option>Pumps</option>
                    <option>Glass</option>
                    <option>Water Heaterr</option>
                </select>
            </div>
        </div>
        <div className='col-md-4 mt-4'>
            <div className='border-0'>
                <label>Category</label><br/>
                <select className='w-75 'style={{height:40}} value={this.state.category} onChange={this.changecategory}>
                    <option>Quality A</option>
                    <option>Quality B</option>
                    <option>Quality C</option>
                    <option>Quality D</option>
                </select>
            </div>
        </div>
        <div className='col-md-4 mt-4'>
            <div className='border-0'>
                <label>Priority</label><br/>
                <select className='w-75 'style={{height:40}} value={this.state.priority} onChange={this.changepriority}>
                    <option>High</option>
                    <option>Low</option>
                    <option>Medium</option>
                </select>
            </div>
        </div>
        <div className='col-md-4 mt-4'>
            <div className='border-0'>
                <label>Dept</label><br/>
                <select className='w-75 'style={{height:40}} value={this.state.dept} onChange={this.changedept}>
                    <option>startegy</option>
                    <option>Finance</option>
                    <option>Quality</option>
                    <option>Maintenance</option>
                    <option>Stores</option>
                </select>
            </div>
        </div>
        <div className='col-md-4 mt-4'>
            <div className='border-0'><br/>
            <label>start Date as per Project Plan</label><br/>
                <input className='w-75 'style={{height:40}} value={this.state.start_date} onChange={this.changestart_date} type='date'/>
            </div>
        </div>
        <div className='col-md-4 mt-4'>
            <div className='border-0'><br/>
                <label>End Date as per Project Plan</label><br/>
                <input className='w-75 'style={{height:40}} value={this.state.end_date} onChange={this.changeend_date} type='date'/>
            </div>
        </div>
        <div className='col-md-4 mt-4'>
            <div className='border-0'><br/>
                <label>Location</label><br/>
                <select className='w-75 'style={{height:40}} value={this.state.location} onChange={this.changelocation}>
                    <option>Pune</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                </select>
            </div>
        </div>
        <div className='col-md-4 mt-4 offset-8'>
            <div className='border-0'>
                <label>Status</label><br/>
                <select className='w-25 'style={{height:40}} value={this.state.status} onChange={this.changestatus}>
                    <option> Running</option>
                    <option>Registered</option>
                    <option>cancelled</option>
                </select>
            </div>
        </div>
          
    </div>
    </div>
    </form>

      
        </div>
        </div>




    
    </>

  )
}
}

export default Create_project