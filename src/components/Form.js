import React from "react";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  setStep,
}) => {
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <>
      <h1>Create account</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (password !== confirmPassword) {
            alert("Vos deux mots de passes ne sont pas identiques");
          }else{
            setStep(2);
          }
        }}
      >
        <p>Nom</p>
        <input
          type="text"
          placeholder="votre nom"
          value={name}
          onChange={handleNameChange}
        />
        <p>Email</p>
        <input
          type="email"
          placeholder="votre email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="votre mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <p>Confirmez votre Password</p>
        <input
          type="text"
          placeholder="confirmer votre mot de passe"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <div>
        <button type="submit">REGISTER</button>
        </div>
       
      </form>
      
    </>
  );
};

export default Form;
