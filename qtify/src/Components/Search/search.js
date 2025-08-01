// // import React from "react";
import styles from "./Search.module.css";
// import SearchIcon  from "../../assets/searchIcon.png";
// // import useAutocomplete from '@mui/base/useAutocomplete';
// import Autocomplete from "@mui/material/Autocomplete";

// import { styled } from "@mui/material/styles";
// // import { truncate } from "../../helpers/helpers";
// import { useNavigate } from "react-router-dom";
// // import { Tooltip } from "@mui/material";

// const Listbox = styled("ul")({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: "0px 0px 10px 10px",
//   border: "1px solid var(--color-primary)",
//   top: 60,
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: "var(--color-black)",
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// });

// function Search({ searchData, placeholder }) {
//   const {
//     getRootProps,
//     value,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//   } = Autocomplete({
//     id: "use-autocomplete-demo",
//     options: searchData || [],
//     getOptionLabel: (option) => option.title,
//   });

//   const navigate = useNavigate();
//   const onSubmit = (e, value) => {
//     e.preventDefault();
//     console.log(value);
//     navigate(`/album/${value.slug}`);
//     //Process form data, call API, set state etc.
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <form
//         className={styles.wrapper}
//         onSubmit={(e) => {
//           onSubmit(e, value);
//         }}
//       >
//         <div {...getRootProps()}>
//           <input
//             name="album"
//             className={styles.search}
//             placeholder={placeholder}
//             required
//             {...getInputProps()}
//           />
//         </div>
//         <div>
//           <button className={styles.searchButton} type="submit">
//             {/* <SearchIcon /> */}
//             <img src={SearchIcon} alt="search icon" />

//           </button>
//         </div>
//       </form>
//       {groupedOptions.length > 0 ? (
//         <Listbox {...getListboxProps()}>
//           {groupedOptions.map((option, index) => {
//             // console.log(option);
//             const artists = option.songs.reduce((accumulator, currentValue) => {
//               accumulator.push(...currentValue.artists);
//               console.log(artists)
//               return accumulator;
//             }, []);

//             return (
//               <li
//                 className={styles.listElement}
//                 {...getOptionProps({ option, index })}
//               >
//                 <div>
//                   <p className={styles.albumTitle}>{option.title}</p>

//                   {/* <p className={styles.albumArtists}>
//                     {truncate(artists.join(", "), 40)}
//                   </p> */}
//                 </div>
//               </li>
//             );
//           })}
//         </Listbox>
//       ) : null}
//     </div>
//   );
// }

// export default Search;

import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <>
      <form className="d-flex justify-content-center" role="search">
        <input className={ `form-control me-2 ${styles.searchBar}` } type="search" placeholder="Search a album of your choice..." aria-label="Search" />
        <button style={ {
          position: "relative",
          right: "0.5rem",
          top: "0rem",
          border: "0.1rem solid black",
          borderRadius: "0rem 0.375rem 0.375rem 0rem",
          fontSize: "0.85rem"
        } } className="btn" type="submit"><FaSearch /></button>
      </form>
    </>
  )
}
