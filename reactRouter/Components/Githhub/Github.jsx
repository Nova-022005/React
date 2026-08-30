import React, {useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github(){
  // const [data,setData]= useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Nova-022005')
  //   .then((responce) => responce.json()).then(
  //   data =>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  const data=useLoaderData()
  return(
    <div className="text-center m-4 bg-gray-500 rounded-3xl text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img className="w-50 rounded-full ml-20  " src={data.avatar_url} alt="" />
    </div>
  );
}


export const githubInfoLoader =async()=>{
  const respone=await(fetch('https://api.github.com/users/Nova-022005'))
  return respone.json();

}


// useLoaderData is react-router-dom hook which is more efficent way for loading api 
//  