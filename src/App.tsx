import { useState, useEffect} from 'react';
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
    <>
      <div>
      <h1>Tervetuloa selaamaan taidetta!</h1>
      
          <LoginForm />
      </div>
    </>
  );

}



export default App;
