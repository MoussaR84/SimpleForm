import React from "react";


const Steptwo=({name,email,password,setStep})=>{

return(

<>
<h1>Result</h1>
<div className="containerResult">
<p>Nom:{name}</p>
<p>Email: {email}</p>
<p>Password:{password}</p>
<button 
onClick={()=>{
    setStep(1)
}}
>Edit your informations</button>
</div>
</>
)

}

export default Steptwo