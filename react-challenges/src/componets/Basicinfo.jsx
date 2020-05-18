import React from "react";


const Basicinfo = (props)=>{
    return(
        <div className="contacts">
        <h1>My name is {props.data.name} and I'm {props.data.age} years old.</h1>
        <div>My phone number is {props.data.number}.</div>
        <div> I was born on {props.data.birthday}</div>
        </div>
    )
}


export default Basicinfo;