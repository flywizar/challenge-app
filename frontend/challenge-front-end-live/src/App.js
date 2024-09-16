import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greetings';
import React, { useEffect, useState } from "react";
import ChallengeList from './components/ChallengeList';
import axios from 'axios';
import AddChallenge from './components/AddChallenge';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  const [challenges, setChallenges]= useState ([
    
  ]);

  useEffect(() => { 
    fetchChallenges(); 
  }, []);
 
  const fetchChallenges = async () => {  
    try { 
      const response = await axios.get('http://challenge-new-app-env.eba-jqennfcm.us-east-1.elasticbeanstalk.com/challenges'); 
      setChallenges(response.data);
    } catch (error) {
      console.error("Error fetching challenges: ", error); 
    }
  };
 
  const handleChallengeAdded = () => { 
    fetchChallenges(); 
  }

  return (
    <div className="container mt-5">
      <h1 className='text-center mb-4'>Monthly Challenges</h1>
      <AddChallenge onChallengeAdded = {handleChallengeAdded} /> 
    <ChallengeList challenges={challenges}/>
    </div>
  );
}

export default App;
