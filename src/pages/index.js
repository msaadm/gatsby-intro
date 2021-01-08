import React from 'react';
import { Link } from 'gatsby';

export default () => {
  return (
    <>
      <h1>Home</h1>
      <p>Hello Berlin!</p>
      <Link to="/about/">Learn about me &rarr;</Link>
    </>
  );
};
