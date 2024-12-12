import { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm'
import Dashboard from './Dashboard';
import { auth } from '../firebaseConfig'; 
import { onAuthStateChanged } from 'firebase/auth';
import './App.css' 

function App (){

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, setUser);
      return () => unsubscribe();
    }, []);

    if (user) {
      return <Dashboard />;
    }
  

  return (
    <Routes>
      <div>
      <h1>Tervetuloa selaamaan taidetta!</h1>
      
        <Route path='/dashboard'>
        {user ? <Dashboard />: <LoginForm />}
        </Route>
        <Route path="/">
        {user ? <Dashboard /> : <LoginForm />}
        </Route>
      </div>
      </Routes>
    
  );

}



export default App;
