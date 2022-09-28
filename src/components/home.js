import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome! This app is a synergy between Rails and React.</h2>
    <Link to="/greeting">Your message here</Link>
  </div>
);

export default Home;
