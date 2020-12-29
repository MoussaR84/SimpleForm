import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Steptwo from "./components/Step2"

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep]=useState(1)

  console.log("setPassword", setPassword);
  return (
    <div>
      {step===1 ? 
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        setStep={setStep}


      /> :

      <Steptwo 
      name={name}
      email={email}
      password={password}
      setStep={setStep}
      />
      }
       
       <div>
        <Footer />
       </div>
     
       </div>
  );
}

export default App;
