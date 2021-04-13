import React , {useState} from 'react'

function Login(){
    const [username , setUsername] = useState('')
    const [showProfile , setshowProfile] = useState(false) 

    return (
        <>
        <input type="text" 
        placeholder="Username" 
        onChange={(event) => setUsername(event.target.value)} /> 
        <br/>

        <input type="text" placeholder="Password" />
        <br/>

        <button onClick={() => {setshowProfile(true);}}>LOGIN</button>
        <br/>

        {showProfile && <h1>{username}</h1>}
        </>
    )
}

export default Login;