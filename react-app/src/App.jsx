// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center" classes ="textuppercase">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App
//  return (
//     <div>
//       <h1>Hello Ritik 👋</h1>
//       <h2>Welcome to React!</h2>
//       <p>Main React seekh raha hu.</p>
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////
// import  { Component } from "react";

// class App extends Component {
//   // Constructor
//   constructor() {
//     super();

//     // State
//     this.state = {
//       name: "React Class Component",
//       gender: "Male",
//     };
//   }

//   // State Update Method
//   updateState=()=> {
//     this.setState({
//       name: "Sanvi",
//       gender: "Female",
//     });
//   }

//   // Render Method
//   render() {
//     return (
//       <div>
//         <h1>Welcome to React Class Component</h1>

//         <p>Name: {this.state.name}</p>
//         <p>Gender: {this.state.gender}</p>

//         <button onClick={this.updateState}>
//           Update State
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
//////////////////////////////////////////////////////////////////////////////////////////
// props
// props are used to pass data from parent component to child component
// import React from "react";
// // state parent
// class App extends React.Component {
//  constructor(props) {
//  super(props);
//  this.state = {
//  name: "John",
//  age: 30
//  };
//  }
//  render() {
//  return (
//  <div>
//  <h1>parent Props Example</h1>
//  <ChildComponent1 name={this.state.name} age={this.state.age} />
//  <ChildComponent2 name={this.state.name} age={this.state.age} />
//  <button onClick={() => this.setState({ name: "Jane", age: 25 })}>
//  parent Update State
//  </button>
//  </div>
//  );
//  }
// }

// class ChildComponent1 extends React.Component {
//  constructor(props) {
//  super(props);
//  this.state = {
//  name1: props.name,
//  age1: props.age
//  };
//  }
//  render() {
//  return (
//  <div>
//  <h1>Child Component 1</h1>
//  <p>Name: {this.state.name1}</p>
//  <p>Age: {this.state.age1= 36}</p>
//  </div>
//  );
//  }
// }

// class ChildComponent2 extends React.Component {
//  render() {
//  return (
//  <div>
//  <h1>Child Component 2</h1>
//  <p>Name: {this.props.name}</p>
//  <p>Age: {this.props.age}</p>
//  </div>
//  );
//  }
// }

// export default App;
// props
// props are used to pass data from parent component to child component
// parent to child data transfer is done using props
// child to parent data transfer is done using callback function

// lifting state up is a technique in React where the state is moved up to the closest common ancestor of the components that need to share the state. This allows for better state management and data flow between components.
import React from "react";
import ChildComponent1 from"./childComponent1"
// state parent
class App extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
 name: "John",
 age: 30
 };
 }

 updateState = (name, age) => {
 this.setState({ name: name, age: age });
 };

 render() {
 return (
 <div>
 <h1>parent Props Example</h1>
 <p>Name: {this.state.name}</p>
 <p>Age: {this.state.age}</p>
 <ChildComponent1 name={this.state.name} age={this.state.age} updateState={this.updateState} />
 <ChildComponent2 name={this.state.name} age={this.state.age} updateState={this.updateState} />
 <button onClick={() => this.updateState("Bob", 35)}>
 parent Update State
 </button>
 </div>
 );
 }
}

// class ChildComponent1 extends React.Component {
// // constructor(props) {
// // super(props);
// // this.state = {
// // name1: props.name,
// // age1: props.age
// // };
// // }
//  render() {
//  return (
//  <div>
//  <h1>Child Component 1</h1>
//  <p>Name: {this.props.name}</p>
//  <p>Age: {this.props.age}</p>
//  <button onClick={() => this.props.updateState("Alice", 28)}>
//  c1 Update State
//  </button>
//  </div>
//  );
//  }
// }

class ChildComponent2 extends React.Component {
// constructor(props) {
// super(props);
// this.state = {
// name2: props.name,
// age2: props.age
// };
// }
 render() {
 return (
 <div>
 <h1>Child Component 2</h1>
 <p>Name: {this.props.name}</p>
 <p>Age: {this.props.age}</p>
 <button onClick={() => this.props.updateState("Charlie", 30)}>
 c2 Update State
 </button>
 </div>
 );
 }
}

export default App;