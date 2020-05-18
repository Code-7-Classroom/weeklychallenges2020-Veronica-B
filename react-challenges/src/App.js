import React, { Component } from 'react';
import './App.css';
import Basicinfo from './componets/Basicinfo'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      person:[
        {
        name:"Kyle",
        age:23,
        number:77777777,
        birthday:"4/20/97"
      },
      {
        name:"Lil",
        age:20,
        number:99977777,
        birthday:"8/20/00"
      },
      {
        name:"Kat",
        age:21,
        number:999007777,
        birthday:"8/20/99"

      }
    ]
  }
}
  
  
 render(){ return (
    <div className="body">
     {this.state.person.map(info => {
       return <Basicinfo data={info}/>

     })}
    {/* <Basicinfo data={this.state.person}/> */}
    </div>

  );
 }
}

export default App;
