import React,{useEffect, useState} from "react";
import ReactDom from "react-dom";
/* import {Greeting, UserCard} from './Getting'
import {Button}from './button'
import {TaskCard} from './task' */
import {Post} from './post'
//import Greeting from './Getting.js' (para el otro)
const root = ReactDom.createRoot(document.getElementById("root"));
const handleChange=(e)=>{  
    console.log(e.target.value)    
    
}
/*
const user =[
    {
        id:1,
        name: 'ryan ray',
        image:'https://robohash.org/user1',

    },
    {
        id:2,
        name: 'pepe ray',
        image:'https://robohash.org/user2',

    }
]*/
function Counter(){
    const [counter,setCounter] =useState(0)
    const[mensaje,setMensaje] =useState('')
    useEffect(()=>{
        console.log('render')
    },[counter ])
    return(
        <div>
            <input onChange={e=>setMensaje(e.target.value)}/>
            <button onClick={()=>{
                alert('el mensaje es: '+mensaje)
            }}>save</button>
            <hr/>
            <h1>counter: {counter}</h1>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>
                sumar
            </button>
            {/*<button onClick={()=>{
                setCounter(counter-1)
            }}>
                restar
            </button>
            <button onClick={()=>{
                setCounter(0)
            }}>
                reiniciar
            </button> */}
        </div>
    )
}
root.render(<>
    <Counter/>
    
    {/*{user.map((user,index)=>{
        return(
            <div key={index}>
                <h1 >{user.name}</h1>
                <img src={user.image}/>
            </div>
        );
    })}
    <Post/>
     <TaskCard ready={false}/>

    <Button text='saludar'/>
    <input onChange={handleChange}/>

    <form onSubmit={(e)=>{
        e.preventDefault();
        alert('enviado')
    }}>
        <h1>registro de usuarios</h1>
        <button>send</button>
    </form> */}
    {/* <Button text='click me'/>
    <Button text='pay'/>
    <Button /> */}
    {/* <Greeting title="hola" name="joe"/>
    <Greeting x="bye"/>
    <Greeting y={30}/>
    <Greeting z={true}/>
    <Greeting a={[1,2,3]}/> */}
   {/*  <UserCard
        name="ryan ray"
        amount={3000}
        married={true}
        points={[99,33.3,22.2]}
        address={{street:"123 main street",city:"new york"}}
        greet={function(){alert('hello')}}   
    /> */}
</>);
