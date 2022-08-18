// import React from "react";
// import './navbar.css'
// import { NavLink } from "react-router-dom";
// const Navbar=()=> {

//     return<div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient-primary">
// 				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 					<span className="navbar-toggler-icon"></span>
// 				</button>
				
// 				<div className="collapse navbar-collapse" id="navbarSupportedContent">
// 					<ul className="navbar-nav mr-auto vertical-nav">
// 						<li className="nav-item">
// 							<NavLink className="nav-link sb" to={"/"}
// 							style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}
// 							>
							 
// 							SB-Admin
// 							<sub>2</sub>
// 							</NavLink>			
// 						</li>
// 						<li className="nav-item">
// 							<NavLink className="nav-link" to={"/dashboard"} >
							
// 							Dashboard</NavLink>
// 						</li>
// 						<div className="sidebar-heading">
// 								Interface
// 							</div>
// 						<li className="nav-item  dropdown">
// 							<NavLink className="nav-link dropdown-toggle" id="navbarDropdown" to={"/contact"} 
// 							role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							
// 								Components
// 							</NavLink>
							
// 							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
// 							<NavLink className="dropdown-item" to={"/blogs"}>Action</NavLink>
// 							<NavLink className="dropdown-item" to={"/contact"}>Another action</NavLink>
// 							<div classNames="dropdown-divider"></div>
// 							<NavLink className="dropdown-item"  to={"/contact"}>Something else here</NavLink>
// 							</div>
// 						</li>
// 						<li className="nav-item  dropdown">
// 							<NavLink className="nav-link dropdown-toggle" id="navbarDropdown" to={"/blogs"} 
// 							role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 								* <FontAwesomeIcon icon={faWrench} className="fontawesome"/> 
// 								Utilites
// 							</NavLink>
// 							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
// 							<NavLink className="dropdown-item" to={"/blogs"}>Action</NavLink>
// 							<NavLink className="dropdown-item" to={"/contact"}>Another action</NavLink>
// 							<div classNames="dropdown-divider"></div>
// 							<NavLink className="dropdown-item" to={"/contact"}>Something else here</NavLink>
// 							</div>
// 						</li>
// 					<div className="sidebar-heading">
// 						Addons
// 					</div>
// 					<li className="nav-item  dropdown">
// 							<NavLink className="nav-link dropdown-toggle" id="navbarDropdown" to={"/blogs"} 
// 							role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 							{/* <FontAwesomeIcon icon={faFolder} className="fontawesome"/>  	 */}
//               Pages

// 							</NavLink>
// 							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
// 							<NavLink className="dropdown-item" to={"/blogs"}>Action</NavLink>
// 							<NavLink className="dropdown-item" to={"/contact"}>Another action</NavLink>
// 							<div classNames="dropdown-divider"></div>
// 							<NavLink className="dropdown-item" to={"/contact"}>Something else here</NavLink>
// 							</div>
// 						</li>
// 					<li className="nav-item">

// 						<NavLink className="nav-link" to={"/trans"}>
// 						 <FontAwesomeIcon icon={faChartBar} className="fontawesome"/> *
// 							trans</NavLink>
// 					</li>
// 						<li className="nav-item">
// 							<NavLink className="nav-link" to={"/contact"}>
// 							* <FontAwesomeIcon icon={faTable} className="fontawesome"/> 
// 							Tables</NavLink>
// 						</li>
// 					</ul>
// 				</div>
// 			</nav>        
//     </div>
// }

// export default Navbar;


// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDashboard} from '@fortawesome/free-solid-svg-icons'
// import './navbar.css';
// const SideMenu=()=>{

//     return <div className="side-menu"> 
//         <div className="top-section">
//             <div className="logo">
//                 <h5>Online<br/>payment</h5>
//             </div>
//         </div>
        
//         <div className="main-menu">
//             <ul className="menu-item">
//                 <li>
//                     <div className="menu-icon">
//                     <FontAwesomeIcon icon={faDashboard} />  </div>
//                     dashboard
//                 </li>

//                 <li>
                    
//                     <div className="menu-icon">
//                     <FontAwesomeIcon icon={faDashboard} />  </div>
//                     transaction
//                 </li>

//                 <li>
//                     <div className="menu-icon">
//                     <FontAwesomeIcon icon={faDashboard} />  </div>
//                     void and refund
//                 </li>

//                 <li>
//                     <div className="menu-icon">
//                     <FontAwesomeIcon icon={faDashboard} />  </div>
//                     dashboard
//                 </li>

//                 <li>

//                     <div className="menu-icon">
//                     <FontAwesomeIcon icon={faDashboard} />  </div>
//                     dashboard
//                 </li>

//                 <li>
//                     <div className="menu-icon">
//                     <FontAwesomeIcon icon={faDashboard} />  </div>
//                     dashboard
//                 </li>

//                 <li>
//                     <div className="menu-icon">
//                     <FontAwesomeIcon icon={faDashboard} />  </div>
//                     dashboard
//                 </li>

//                 <li>
//                     <div className="menu-icon">
//                     <FontAwesomeIcon icon={faDashboard} />  </div>
//                     dashboard
//                 </li>

//                 <li>
//                     <div className="menu-icon">
//                     <FontAwesomeIcon icon={faDashboard} />  </div>
//                     dashboard
//                 </li>
//             </ul>
//         </div>
//     </div>
// }

// export default SideMenu;

// import React from "react";
// import { Link } from "react-router-dom";
//  import './navbar.css'

// const Navbar=()=> {

//     return <nav className="navbar navbar-expand-lg bg-light vertical-nav">
//         <div className="container">
//             <div>
//             <Link className="navbar-brand" to={"/"}>Online <br/>payment</Link>
//             </div>
            
//              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//             </button> 
//             <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                     <Link className="nav-link active" aria-current="page" to={"/dashboard"}>dashboard</Link>
//                     </li>
//                     <li className="nav-item dropdown">
//                         <Link className="nav-link dropdown-toggle" to={""} role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                          transaction
//                         </Link>
//                         <ul className="dropdown-menu">
//                             <li><Link className="dropdown-item" to={"/"}>Action</Link></li>
//                             <li><Link className="dropdown-item" to={"/"}>Another action</Link></li>
//                             <li><Link className="dropdown-item" to={"/"}>Something else here</Link></li>
//                         </ul>
//                     </li>
//                 <li className="nav-item dropdown">
//                     <Link className="nav-link dropdown-toggle" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Dropdown link
//                     </Link>
//                     <ul className="dropdown-menu">
//                         <li><Link className="dropdown-item" to={"/"}>Action</Link></li>
//                         <li><Link className="dropdown-item" to={"/"}>Another action</Link></li>
//                         <li><Link className="dropdown-item" to={"/"}>Something else here</Link></li>
//                     </ul>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <Link className="nav-link dropdown-toggle" to={"/"}  data-bs-toggle="dropdown" aria-expanded="false">
//                         Dropdown link
//                     </Link>
//                     <ul className="dropdown-menu">
//                         <li><Link className="dropdown-item" to={"/"}>Action</Link></li>
//                         <li><Link className="dropdown-item" to={"/"}>Another action</Link></li>
//                         <li><Link className="dropdown-item" to={"/"}>Something else here</Link></li>
//                     </ul>
//                 </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// }

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChartBar, faCog, faFolder, faLaughWink, faTable, faTachometer, faWrench } from '@fortawesome/free-solid-svg-icons'
// import './navbar.css'

// const Navbar=()=> {

//     return <nav className="navbar navbar-expand-lg navbar-light">
//          <Link class="navbar-brand" to={"/"}>Navbar</Link>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//     </button>
    
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto vertical-nav">
//          <li className="nav-item">
//                 <Link className="nav-link sb" to={"/dashboard"}>
                
//                 online <br/>Payment
//                 <sub>2</sub>
//                 </Link>			
//             </li> 
//             <li className="nav-item">
//                 <Link className="nav-link" to={"/"}>
//                 <FontAwesomeIcon icon={faTachometer} className="fontawesome"/>
//                 Dashboard</Link>
//             </li>
//             <li className="nav-item dropdown">
//                      <Link className="nav-link dropdown-toggle" to={"/"}  data-bs-toggle="dropdown" aria-expanded="false">
//                      <FontAwesomeIcon icon={faTachometer} className="fontawesome"/>
//                          Dropdown link
//                      </Link>
//                      <ul className="dropdown-menu">
//                          <li><Link className="dropdown-item" to={"/"}>Action</Link></li>
//                          <li><Link className="dropdown-item" to={"/"}>Another action</Link></li>
//                          <li><Link className="dropdown-item" to={"/"}>Something else here</Link></li>
//                      </ul>
//                  </li>
//             <div className="sidebar-heading">
//                     Interface
//                 </div>
//             <li className="nav-item  dropdown">
//                 <Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/trans"} 
//                 role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     <FontAwesomeIcon icon={faCog} className="fontawesome"/>
//                     Components
//                 </Link>

//                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
//                 <Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
//                 <div className="dropdown-divider"></div>
//                 <Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
//                 </div>
//             </li>
//             <li className="nav-item  dropdown">
//                 <Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/blogs"} 
//                 role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     <FontAwesomeIcon icon={faWrench} className="fontawesome"/>
//                     Utilites
//                 </Link>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
//                 <Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
//                 <div className="dropdown-divider"></div>
//                 <Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
//                 </div>
//             </li>
//         <div className="sidebar-heading">
//             Addons
//         </div>
//         <li className="nav-item  dropdown">
//                 <Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/blogs"} 
//                 role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 <FontAwesomeIcon icon={faFolder} className="fontawesome"/>  	Pages

//                 </Link>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
//                 <Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
//                 <div className="dropdown-divider"></div>
//                 <Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
//                 </div>
//             </li>
//         <li className="nav-item">

//             <Link className="nav-link" to={"/blogs"}>
//             <FontAwesomeIcon icon={faChartBar} className="fontawesome"/>
//                 Charts</Link>
//         </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to={"/contact"}>
//                 <FontAwesomeIcon icon={faTable} className="fontawesome"/>
//                 Tables</Link>
//             </li>
//         </ul>
//     </div>
// </nav>
// }

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import './navbar.css'

// const Navbar=()=> {

//     return <nav class="navbar navbar-expand-lg navbar-light" style={{BackgroundColor:"red"}}>
//     <Link class="navbar-brand" to={"/"}>Navbar</Link>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
  
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav mr-auto">
//         <li class="nav-item active">
//           <Link class="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to={"/"}>Link</Link>
//         </li>
//         <li class="nav-item dropdown">
//           <Link class="nav-link dropdown-toggle" to={"/"} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             Dropdown
//           </Link>
//           <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <Link class="dropdown-item" to={"/"}>Action</Link>
//             <Link class="dropdown-item" to={"/"}>Another action</Link>
//             <div class="dropdown-divider"></div>
//             <Link class="dropdown-item" to={"/"}>Something else here</Link>
//           </div>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link disabled" to={"/"} tabindex="-1" aria-disabled="true">Disabled</Link>
//         </li>
//       </ul>
//       <form class="form-inline my-2 my-lg-0">
//         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
//       </form>
//     </div>
//   </nav>

//   return <nav class="navbar navbar-expand-lg navbar-light bs-side-navbar" style={{BacgroundColor:"red"}}>
//   <Link class="navbar-brand" to={"/"}>Navbar</Link>
//  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
//      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//      <span class="navbar-toggler-icon"></span>
//  </button>

//  <div class="collapse navbar-collapse" id="navbarSupportedContent">
//      <ul class="navbar-nav mr-auto">
//          <li class="nav-item active">
//          <Link class="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
//          </li>
//          <li class="nav-item">
//          <Link class="nav-link" to={"/"}>refund <span class="sr-only">(current)</span></Link>
//          </li>
//          <li class="nav-item dropdown">
//            <Link class="nav-link dropdown-toggle" to={"/"} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//              ropdown
//            </Link>
//            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//              <Link class="dropdown-item" to={"/"}>Action</Link>
//              <Link class="dropdown-item" to={"/"}>Another action</Link>
//           <div class="dropdown-divider"></div>
//              <Link class="dropdown-item" to={"/"}>Something else here</Link>
//            </div>
//         </li>
//         <li className="nav-item  dropdown">
// 							<Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/blogs"} 
// 							role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 								{/* <FontAwesomeIcon icon={faWrench} className="fontawesome"/> */}
// 								Utilites
// 							</Link>
// 							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
// 							<Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
// 							<Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
// 							<div className="dropdown-divider"></div>
// 							<Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
// 							</div>
// 						</li>
//      </ul>
     
//  </div>
// </nav>
// }

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import './navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChartBar, faCog, faFolder, faLaughWink, faTable, faTachometer, faWrench } from '@fortawesome/free-solid-svg-icons'

// const Navbar=()=> {


//   return <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient-primary">
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
  
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto vertical-nav">
//       <li className="nav-item">
//         <Link className="nav-link sb" to={"/"}>
//         <FontAwesomeIcon icon={faLaughWink} className="fontawesome-wink"/>
//         SB-Admin
//         <sub>2</sub>
//         </Link>			
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to={"/"}>
//         <FontAwesomeIcon icon={faTachometer} className="fontawesome"/>
//         Dashboard</Link>
//       </li>
//       <div className="sidebar-heading">
//           Interface
//         </div>
//       <li className="nav-item  dropdown">
//         <Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/"} 
//         role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           <FontAwesomeIcon icon={faCog} className="fontawesome"/>
//           Components
//         </Link>
        
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//         <Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
//         <Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
//         <div className="dropdown-divider"></div>
//         <Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
//         </div>
//       </li>
//       <li className="nav-item  dropdown">
//         <Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/blogs"} 
//         role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           <FontAwesomeIcon icon={faWrench} className="fontawesome"/>
//           Utilites
//         </Link>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//         <Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
//         <Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
//         <div className="dropdown-divider"></div>
//         <Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
//         </div>
//       </li>
//     <div className="sidebar-heading">
//       Addons
//     </div>
//     <li className="nav-item  dropdown">
//         <Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/blogs"} 
//         role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         <FontAwesomeIcon icon={faFolder} className="fontawesome"/>  	Pages
          
//         </Link>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//         <Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
//         <Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
//         <div className="dropdown-divider"></div>
//         <Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
//         </div>
//       </li>
//     <li className="nav-item">

//       <Link className="nav-link" to={"/blogs"}>
//       <FontAwesomeIcon icon={faChartBar} className="fontawesome"/>
//         Charts</Link>
//     </li>
//       <li className="nav-item">
//         <Link className="nav-link" to={"/contact"}>
//         <FontAwesomeIcon icon={faTable} className="fontawesome"/>
//         Tables</Link>
//       </li>
//     </ul>
//   </div>
// </nav>
// }

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

import './navbar.css';

const Navbar=()=> {


  return <div>
    <nav class="navbar navbar-expand-lg navbar-light bs-side-navbar" style={{BackgroundColor:"red"}}>
     <Link class="navbar-brand" to={"/"}>Navbar</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link class="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to={"/"}>Link</Link>
            </li>
            <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to={"/"} id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to={"/"}>Action</Link>
                    <Link class="dropdown-item" to={"/"}>Another action</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" to={"/"}>Something else here</Link>
                </div>
            </li>
            <li class="nav-item">
                <Link class="nav-link disabled" to={"/"}  aria-disabled="true">Disabled</Link>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
  </div>
}

export default Navbar;