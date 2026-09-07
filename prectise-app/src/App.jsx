
// class App extends Component{
//   constructor(){
//     super();

//     this.state={
//       userName:"",
//       password:"",
//       message:" ",
//     };
//   }
//   updateUserName=(event)=>{
//     this.setState({
//       userName:event.target.value,
//     })
//   }
//   updatePassword=(event)=>{
//     this.setState({
//       password:event.target.value,
//     })
//   }
//   login=()=>{
//     if(
//       (this.state.userName==="Anjali Rajput"|| this.state.userName==="Ritik.Sr") && (this.state.password==="5588" ||this.state.password==="54321" )
//     ){
//     this.setState({
//       message:"Login Successfully",
//     })
//     }else{
//       this.setState({
//       message:"Invalid username and password",
//       })
//     }
//   }
//   render(){
//     return(
//        <div>
//         <h1>Login Page</h1>
//         <label htmlFor="">Username</label>
//         <input type="text" placeholder="Enter userName" value={this.state.userName} onChange={this.updateUserName} />
//         <br />
//         <label htmlFor="">Password</label>
//         <input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.updatePassword} />
//         <br />
//         <button onClick={this.login}>Login</button>

//         <h2>{this.state.message}</h2>
//        </div>
//     )
//   }
// }
// export default App;
// import { useEffect, useState } from "react";

// function App(){
  
//   const[ userName,setUserName]=useState("");
//   const[ password,setPassword]=useState("");
//   const[ message ,setMessage]=useState("");
//   const[isLoggedIn, setIsLoggedIn]=useState(false);

//   //  useEffect(() => {
//   //   console.log("Component Load Hua");
//   // }, []);

//    const handleUserName = (event) => {
//     setUserName(event.target.value);
//   };

  
//   const handlePassword = (event) => {
//     setPassword(event.target.value);
//   };

// const login=()=>{
//   if(userName ==="Ritik.SR" && password ==="123456"){
//     setIsLoggedIn(true);
//   }else{
//     setMessage("Invalid userName and password");
//     setIsLoggedIn(false)
//   }
//  };

//  useEffect(()=>{
//    if(isLoggedIn){
//     alert("welcome"+" "+ userName);
//    }
//  },[isLoggedIn]);
//  return(

//   <div>
//     <h1>Login page</h1>
//     <label htmlFor="">UserName</label>
//     <input type="text" placeholder="Enter UserName" value={userName} onChange={handleUserName} />
//     <br /><br />
//     <label htmlFor="">Password</label>
//     <input type="password" placeholder="Enter Password" value={password} onChange={ handlePassword} />  
//     <br /><br />
//     <button onClick={login}>Login</button>
//     <h3>{message}</h3>
//   </div>
//  );
// }
// export default App;
