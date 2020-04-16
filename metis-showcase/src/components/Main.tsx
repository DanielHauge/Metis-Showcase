import React from 'react';
import './Main.scss';
import Head from './layout/Head';
import Body from './layout/Body';

export default () => {
  return (
    <div className="Main">
      <Head />
      <hr className="style-two" />
      <Body />

      
    </div>
  );
}