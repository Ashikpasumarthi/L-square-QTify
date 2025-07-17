import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import Logo from "../Logo/logo";
import Search from "../Search/search";
import styles from "./Navbar.module.css";
import Button from "../Button/button";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import { styled } from "@mui/material/styles";

// function Navbar({ searchData }) {
//   return (
//     <React.Fragment>
//       <Box className={styles.navbar}>
//         <Grid container>
//           <Grid item xs={12} md="auto" sx={{ width: 'auto' }}>
//             <Link to="/">
//               <Logo />
//             </Link>
//           </Grid>
//           <Grid item xs={12} md>
//             <Search
//               placeholder="Search a song of your choice"
//               searchData={searchData}
//             />
//             <div>Hello Search</div>
//           </Grid>
//           <Grid item xs={12} md="auto" sx={{ width: 'auto' }}>
//             {/* <Button>Give Feedback</Button> */}
//           </Grid>
//         </Grid>
//       </Box>
//     </React.Fragment>
//   );
// }

// export default Navbar;

function Navbar() {
  return (
    <React.Fragment>
      <div className={ `container-fluid ${styles.navbar}` }>
        <div className="row text-center align-items-center" style={ { position: "relative", top: "1rem" } }>

          <div className="col text-start">
            <Link to="/"><Logo /></Link>
          </div>
          <div className="col text-center">
            <Search />
          </div>
          <div className="col text-end">
            <Button />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;

// import React from "react";
// // import Grid from "@mui/material/Grid";
// // import Box from "@mui/material/Box";
// export default function Navbar() {
//   return (
//     <div>
//       hello world
//     </div>


//   );
// }
