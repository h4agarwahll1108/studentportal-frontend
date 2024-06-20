import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default Home;
