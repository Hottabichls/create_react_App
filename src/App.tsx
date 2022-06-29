import React from 'react';
import logo from './logo.svg';
import './App.css';




function App() {
    console.log("App rendering")
  return (
    <div className="App">
        <AppTitle />
        <Rating />
        <Accordion />
    </div>
  );
};

function AppTitle() {
    console.log("AppTitle rendering")
    return (
        <>This is APP component</>
    );
};

function Star() {
    console.log("Star rendering")
return (
    <div>star</div>
)
};


function Rating() {
    console.log("Raiting rendering")
    return (
        <>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </>
    );
};

function AccordionTitle() {
    console.log("AccordionTitle rendering")
return (
    <h3>Меню</h3>
);
};

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};


function Accordion() {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle />
            <AccordionBody />
        </div>
    );
};

export default App;

