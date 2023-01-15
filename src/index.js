import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';


// creating a counter "learning react components"
// let counter = 0;
// function show() {
//   counter++;
//   const el = <p>{counter}</p>;
//   ReactDOM.render(el, document.getElementById('root'));
// }
// setInterval(show, 1000);


//learning react props
// function Employee(props) {
//   return <div className='employee'>
//     <p>Name: {props.name}</p>
//     <p>Department : {props.dept}</p>
//   </div>;

// }

// function App() {
//   return <div>
//     <Employee name="Fay Vera" dept="Sales" />
//     <Employee name="Elsy Kimaka" dept="Management" />
//     <Employee name="Winnie Rynne" dept="Sales" />

//   </div>
// }
// const emp = <App />
// ReactDOM.render(emp, document.getElementById('root'));


//creating a clock in react
// function Clock() {
//   const d = new Date();
//   const el = <p>{d.getHours()}:
//     {d.getMinutes()}:
//     {d.getSeconds()}
//   </p>;
//   ReactDOM.render(el, document.getElementById('root'));
// }
// setInterval(Clock, 1000);


// learing react state 
// class Counter extends React.Component {
//   state = {
//     counter: 0
//   }
//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }
//   render() {
//     return <div>
//       <p>{this.state.counter}</p>
//       <button onClick={this.increment}>Increment</button>
//     </div>;
//   }
// }
// const el = <Counter />
// ReactDOM.render(el, document.getElementById('root'));

//learning react hooks
// function Hi() {
//   const [name, setName] = useState("Elsy");
//   return <p>Hi {name}.</p>
// }
// const el = <Hi />
// ReactDOM.render(el, document.getElementById('root'))


//age calculator "learning handling events"
function Agecalculator() {
  const [year, setYear] = useState(0);
  const x = new Date();
  const d = x.getFullYear();
  function handleChange(e) {
    setYear(e.target.value);
    
  }
  function getAge(year) {
    return d - year;
   
  }
  return <div className='employee'>
    <input type="number" value={year} onChange={handleChange} />
    <p>you're {getAge(year)} years old. </p>
  </div>;
}
const el = <Agecalculator />;
ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
