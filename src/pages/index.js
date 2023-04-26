import React from 'react';
import '../styles/pages/home.css'
  
const Home = () => {
  return (
    <div id = "home">
      <h1>Welcome to my Website</h1>
      <div id = "walletHome">
        <div className='cardHome'>
          <h1> My Projects </h1>
        </div>
        <div className='cardHome'>
          <h1> About me</h1>
        </div>
      </div>
    </div>
  );
};
  
export default Home;