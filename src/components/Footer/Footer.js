import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container'>
            <h1>Q.1: How React works?</h1>
            <p>Answer: React is a JavaScript library developed by Facebook which was used to build Instagram. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React.js is virtual DOM. It is a tree based on JavaScript components created with React that mimics a DOM tree. It does the least amount of DOM manipulation possible in order to keep your React components up to date.</p>

            <h1>Q.2: How useState works?</h1>
            <p>Answer: useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value. It enables you to add state to function components. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine. It’s especially useful for local component state, but larger projects might require additional state management solutions.</p>
        </div>
    );
};

export default Footer;