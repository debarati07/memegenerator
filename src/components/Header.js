import React from "react"
import pic from './memeicon.png'

function Header({title})
{
    return(
        <div className="navbar">
        <div className="memeicon">
        <img src={pic} className="image"/>
        </div>
        <div className="heading">
            <h1>{title}</h1>
        </div>
        </div>
    )
}

export default Header