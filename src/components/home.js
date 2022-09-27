import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome! THis app is a synergy between Rails and React</h2>
    <Link to="/greeting">Get your message</Link>
  </div>
);

export default Home;
