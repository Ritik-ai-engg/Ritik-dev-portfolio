import  { Component } from "react";
class ChildComponent1 extends Component {
// constructor(props) {
// super(props);
// this.state = {
// name1: props.name,
// age1: props.age
// };
// }
 render() {
 return (
 <div>
 <h1>Child Component 1</h1>
 <p>Name: {this.props.name}</p>
 <p>Age: {this.props.age}</p>
 <button onClick={() => this.props.updateState("Alice", 28)}>
 c1 Update State
 </button>
 </div>
 );
 }
}
export default ChildComponent1;