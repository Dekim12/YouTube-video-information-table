import React from 'react';
import './Button.css';

const Button = ({ className = '', content = '', doSomething }) => (
  <button className={className} onClick={doSomething}>
    {content}
  </button>
);

export default Button;
