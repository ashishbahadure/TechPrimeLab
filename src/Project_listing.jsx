import React, { useEffect,useState } from 'react'
// import axios from 'axios'
function Project_listing() {
    const [data,setData]=useState([]);
    const [filterVal,setFilterVal] = useState('');
    const [searchApiData, setSearchApiData] = useState([]);
    // useEffect(()=>{
    //     loaduser()
    // })
    // var loaduser=async()=>{
    //     var res=await axios.get('http://localhost:3000/user');
    //     setData(res.data);
    //     setSearchApiData(res.data);
    // }
    useEffect(()=> {
        const fetchData=() =>{
            fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(json => {
                setData(json)
                setSearchApiData(json)
            })
        }
        fetchData();
    },[])
const handleFilter=(e)=>{
    if(e.target.value ===''){
        setData(searchApiData)
    }else {
      const filterResult =  searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.status.toLowerCase().includes(e.target.value.toLowerCase()) || item.reason.toLowerCase().includes(e.target.value.toLowerCase()) || item.type.toLowerCase().includes(e.target.value.toLowerCase()) || item.division.toLowerCase().includes(e.target.value.toLowerCase()) || item.category.toLowerCase().includes(e.target.value.toLowerCase()) || item.priority.toLowerCase().includes(e.target.value.toLowerCase()) || item.dept.toLowerCase().includes(e.target.value.toLowerCase()) || item.location.toLowerCase().includes(e.target.value.toLowerCase()));
        setData(filterResult)
    }
    setFilterVal(e.target.value)
}

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
        <div className='container'>
        <div className='row'>
    <div className='col-md-12 'style={{background:"#046fd2  "}}>
    <div className='row'>
    <div className='col-md-2 mt-4'><span className=' mt-4 mb-3 text-white '>Create_project</span></div>
   <div className=' col-md-8 text-center'> <img src='https://cdn-icons-png.flaticon.com/512/4882/4882341.png' className='mt-2 mb-2 'style={{height:80,width:80}}/></div>
   </div>
    </div>
    <div className='col-md-8'>
        <input placeholder='search data' value={filterVal} onInput={(e)=>handleFilter(e)}/>
    </div>
    <div className='col-md-4'></div>
    
                       
        <table className='table table-border'>
            <tr className=''>
            <th>Project Name</th>
            <th>Reason</th>
            <th>Type</th>
            <th>Division</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Dept</th>
            <th>Location</th>
            <th>Status</th>
            <th>status Action</th>
            </tr>
            
            {
                data.map((item)=>{
                    return(
                        <tr>
                            <td>{item.name}<br/>{item.start_date}<span className=''> to </span>{item.end_date}</td>
                            <td>{item.reason}</td>
                            <td>{item.type}</td>
                            <td>{item.division}</td>
                            <td>{item.category}</td>
                            <td>{item.priority}</td>
                            <td>{item.dept}</td>
                            <td>{item.location}</td>
                            <td>{item.status}</td>
                            <td><button>start</button></td>
                            <td><button>close</button></td>
                            <td><button>cancel</button></td>

                        </tr>
                    )
                })
            }
        </table>
        
   
      
        </div>
        </div>



</div> 
     </div>

        
    </>
  )
  
}

export default Project_listing;