import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./App.css";

function LoginForm()  {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Kirjautuminen onnistui käyttäjälle " + user.email);
        
        setIsLoggedIn(true);
        navigate("/dashboard");

      });
    } catch (error) {
      setError("Kirjautuminen epäonnistui");
      console.error("Virhe kirjautumisessa", error);
      // Kirjautuminen epäonnistui, näytä virheilmoitus käyttäjälle
    }
  };


  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Sähköposti:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Salasana:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Kirjaudu sisään</button>
      </form>
      {error && <p>{error}</p>} {/* Virheilmoituksen näyttäminen */}
    </div>
  );
}

export default LoginForm;