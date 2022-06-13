import React from "react";

const Home = ({name,user})=>{
    console.log(user)
    return(
        <div>
            <div>Wecome to Fitness world : {name.toUpperCase()}</div>
        </div>
    )
}

export default Home