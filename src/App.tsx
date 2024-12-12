import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm'
import { auth } from '../firebaseConfig'; 
import { onAuthStateChanged } from 'firebase/auth';
import './App.css' 

function App () {
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();
    

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          if (user) {
            navigate("/dashboard");
          }
      });

      return () => unsubscribe();
    }, [navigate]);

    if (user) {
      return null;
    }


  return (
    <div>
      <h1>Tervetuloa!</h1>
      <LoginForm /> 
    </div>
    
  );

}

export default App;
