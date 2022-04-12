import React from "react";

// const Navbar = () => {
//     return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
//     {/* <a className="navbar-brand" href="#">
//       Navbar
//     </a> */}
//     {/* <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNavDropdown"
//       aria-controls="navbarNavDropdown"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button> */}
  
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item active">
//           <a className="nav-link" href="/">
//             Home <span className="sr-only">(current)</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/categories">
//             Categories
//           </a>
//         </li>
//         {/* <li className="nav-item">
//           <a className="nav-link" href="#">
            
//           </a>
//         </li> */}
//         {/* <li className="nav-item dropdown"> */}
//           {/* <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             id="navbarDropdownMenuLink"
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             Dropdown link
//           </a> */}
//           {/* <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <a className="dropdown-item" href="#">
//               Action
//             </a> */}
//             {/* <a className="dropdown-item" href="#">
//               Another action
//             </a> */}
//             {/* <a className="dropdown-item" href="#">
//               Something else here
//             </a> */}
//           {/* </div> */}
//         {/* </li> */}
//       </ul>
//     </div>
  
//   </nav>)
  
// }

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
            {/* <a class="navbar-brand" href="index.html">Start Bootstrap</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                    <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/about">About</a></li>
                    <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/categories">Categories</a></li>
                    <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav> 
    // <div></div>
    )
}
export default Navbar
