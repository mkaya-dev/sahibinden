import React from "react";
import "../pages/All.css"

const SearchBar = ({data,setData,placeholder}) => {

   
    return (
        <div>
                <input class="form-control me-2 "  type="search" placeholder={placeholder} value={data} onChange={(e)=> setData(e.target.value)} aria-label="Search"/>
        </div>
    )
}

export default SearchBar;