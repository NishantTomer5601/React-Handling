import React from "react";
function Card({Profile,userName="Niss"}){
    return(
        <div className="relative h-[400px] w-[300px] rounded-md" >
  <img
    src="https://res.cloudinary.com/dv9uwqm4u/image/upload/v1707048763/v5a8mlsqbxr2slblgxm5.jpg"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{userName}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Hey,I tried adding components in my React Application!
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {Profile} →
    </button>
  </div>
</div>

    )
}

export default Card;