import React, { useState } from 'react'
    import "./Profile.css"
    function Profile() {
        let[state,setState]=useState("https://i.pinimg.com/1200x/42/40/5e/42405ed0f0a4774d6bd6dc782940571f.jpg");
        let[data,setData]=useState({
            name:"",
            gender:"",
            designation:"",
            description:""
        })
        let[theme,setTheme]=useState({
            bgcolor:"",
            text:"",
            title:""
        })
        const changeToBoy=()=>{
        setState("https://i.pinimg.com/736x/b1/b5/6b/b1b56b9e9b21ad32cff1028882cb8245.jpg");
        setData({
        name:'Rajat',
        gender:'Male',
        designation:'HR',
        description:'Employee'
        })
    }
        const changeToGirl=()=>{
        setState("https://i.pinimg.com/736x/eb/6f/17/eb6f1764fefe1a186da890522761ca54.jpg");
        setData({
        name:'Riya',
        gender:'Female',
        designation:'Manager',
        description:'Employee'
    })
    }
    const changeTheme=(e)=>{
        if (e.target.checked) {
            setTheme({
                bgcolor:'black',
                text:'white',
                title:'changed to dark mode'
            })
        }
        else{
            setTheme({
                bgcolor:'white',
                text:'black',
                title:'changed to light mode'
            })
        }
    }
    return (
        <div className='mainContainer'>
            
            <div className='leftContainer'>
                <img src={state}
                height={300}
                width={300}
                alt='no image'/>
            </div>
            <div className='rightContainer' style={{backgroundColor:theme.bgcolor,color:theme.text}}>
                <h2 >Name:{data.name}</h2>
                <h2>Gender:{data.gender}</h2>
                <h2>Designation:{data.designation}</h2>
                <h2>Description:{data.description}</h2>
                <button onClick={changeToBoy}>Rajat</button>&nbsp;&nbsp;
                <button onClick={changeToGirl}>Riya</button>
                <br/><br/>
                <input type='checkbox' onChange={changeTheme}/>
                <h2>Title:{theme.title}</h2>
            </div>

        </div>
    )
    }

    export default Profile