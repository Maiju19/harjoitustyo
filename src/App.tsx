import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm'
import Dashboard from './Dashboard';
import { auth } from '../firebaseConfig'; 
import { onAuthStateChanged } from 'firebase/auth';
import './App.css' 

function App () {
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          navigate("/dashboard");
        } else {
          setUser(null);
          navigate("/");
        }
      });
      return () => unsubscribe();
    }, [navigate]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    
  );

}



export default App;
