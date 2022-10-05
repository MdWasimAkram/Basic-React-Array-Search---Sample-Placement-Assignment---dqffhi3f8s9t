import React from 'react';
import { useState } from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
  const [search, setSearch]= useState("");
  
  return (
    <>
    <div id="main">
    <input id="search-input" type="text" placeholder="Search..."
    onKeyUp={(e)=>{setSearch(e.target.value)
    }}/>
    <br/>
      
    </div>
     {
      searchArray.filter((val)=> {
        if(search==""){
        return;
        }else if(val.toLowerCase().includes(search))
        return val
      }).map((val)=>{
        return(
          <ul>
            <li>{val}</li>
          </ul>
        )
      })
    }
</>
  )
}


export default App;
