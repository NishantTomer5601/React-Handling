import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/NishantTomer5601')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))

    // },[Github])
    const data=useLoaderData()

    
    return (
        <>
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl"> Github Follower Count:  {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
        </>
    )
}

const githubInfoLoader= async ()=>{
    const response=await fetch('https://api.github.com/users/NishantTomer5601')
    return response.json();
}
export  {Github,githubInfoLoader}