import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css';

function Row({title,fetchUrl,isposter}) {
 /*  console.log(fetchUrl); */
 const[allMovie,setAllMovies]=useState()//creating state to access the data outside
 const base_url="https://image.tmdb.org/t/p/original/"

  const fetchData=async()=>{
    const {data}=await instance.get(fetchUrl)
   /*  const {results}=data */
    setAllMovies(data.results);//calling the data stored in all movies
  }

  /* console.log(allMovie); */

  useEffect(()=>{     //used to perform side effects fetching data in this case
    fetchData()
  },[])
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movie-row'>
        {        //js part to get accessed in jsx it should be given inside curly brackets
          allMovie?.map(item=>(
            <img className={`movie ${isposter && 'movie-poster'}`} src={`${base_url}${isposter?item.poster_path:item.backdrop_path}`} alt="no image" />
          ))
        }
      </div>

      </div>

  )
}

export default Row