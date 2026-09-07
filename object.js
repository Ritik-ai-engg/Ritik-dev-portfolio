//first assignment object js//
// const user={
//     firstName: "john",
//     lastName: "Doe",
//     birthYear: 2000,
//     City: "New York",
//   };
//   function generateUserProfile(user) { 
//         const CurrentYear= new Date().getFullYear();
        
//         const fullName= user.firstName +" "+user.lastName;

//         const userAge= CurrentYear - user.birthYear;

//         const canVote = userAge >=18;

//         const profile = {
//             FullName: fullName,
//             age: userAge,
//             City:user.City,
//             CanVote: canVote,

//             getIntroduction:function(){
//                 return`Hello ,my name is ${this.Fullame} . I am ${this.age} years old and I live in ${this.City}.`;
//             }
//         };
//         return profile;
//     }
//     const profile= generateUserProfile(user);

//     console.log(profile);
//     console.log(profile.getIntroduction());


///////2nd assignment ////////
// const account = {
//      accountNumber: "123456789000",
//      accountHolder: "John Doe",
//      balance: 15000,
//      accountType: "Savings",     
// };
//  function generateAccountSummary(account){
//     const interest= account.balance * 0.05;
//     const NewBalance= account.balance + interest;
//     const AccountStatus= NewBalance >= 50000 ? "Premium" : "Standard";

//     const Summary = {
//         AccountNumber: account.accountNumber,
//         AccountHolder: account.accountHolder,
//         AccountType:  account.accountType,
//         UpdatedBalance: NewBalance,
//         Status: AccountStatus,

//         getSummary:function(){
//             return `${Summary.AccountHolder} has a ${Summary.AccountNumber} with a balance of ${Summary.UpdatedBalance} and ${Summary.Status} staus.`;
//         }
//     };
//     return Summary;
//  }
//  //const Summary = generateAccountSummary(account);
//  console.log(generateAccountSummary(account).getSummary());

//////////3rd assignment///////////
// const employeeInfo ={
//     id: 101,
//     name: "John Doe",
//     department: "Development",
//     grossSallary: 60000,

// };
// function generateEmployeeSummary(employeeInfo){
//     const taxAmmount= employeeInfo.grossSallary * 0.10;
//     const netSallary= employeeInfo.grossSallary-taxAmmount;


//     const employeeSummary ={
//         Id:employeeInfo.id,
//         EmployeeName: employeeInfo.name,
//         Department: employeeInfo.department,
//         GrossSallary: employeeInfo.grossSallary,
//         TaxAmmount: taxAmmount,
//         EmployeeSallary: netSallary,

//         getSummary:function(){
//             return`${employeeSummary.EmployeeName} works in ${employeeSummary.Department} department and earns Rs ${employeeSummary.EmployeeSallary} after tax 10% `;
//         }
//     };
//     return employeeSummary;
// }
// const employeeprofile= generateEmployeeSummary(employeeInfo);
// console.log(employeeprofile.getSummary());
// console.log(employeeprofile.employeeSummary);
import { useState, useEffect } from "react";

function App() {

  // ---------------- LOGIN ----------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ---------------- PRODUCTS ----------------
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // ---------------- SEARCH ----------------
  const [search, setSearch] = useState("");

  // ---------------- CART ----------------
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ---------------- TOTAL ----------------
  const [total, setTotal] = useState(0);

  // ---------------- LOADING ----------------
  const [loading, setLoading] = useState(false);

  // ---------------- DARK MODE ----------------
  const [darkMode, setDarkMode] = useState(false);

  // ---------------- ONLINE STATUS ----------------
  const [online, setOnline] = useState(navigator.onLine);

  // ---------------- WINDOW WIDTH ----------------
  const [width, setWidth] = useState(window.innerWidth);

  // ---------------- LOGIN ----------------
  const login = () => {

    if (email === "admin@gmail.com" && password === "12345") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Email or Password");
    }

  };

  // ---------------- FETCH PRODUCTS ----------------
  useEffect(() => {

    if (!isLoggedIn) return;

    setLoading(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {

        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);

      });

  }, [isLoggedIn]);

  // ---------------- SEARCH ----------------
  useEffect(() => {

    const result = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(result);

  }, [search, products]);

  // ---------------- LOCAL STORAGE ----------------
  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);

  // ---------------- TOTAL PRICE ----------------
  useEffect(() => {

    const sum = cart.reduce((acc, item) => acc + item.price, 0);

    setTotal(sum);

  }, [cart]);

  // ---------------- DARK MODE ----------------
  useEffect(() => {

    document.body.style.backgroundColor = darkMode ? "#222" : "white";
    document.body.style.color = darkMode ? "white" : "black";

  }, [darkMode]);

  // ---------------- ONLINE OFFLINE ----------------
  useEffect(() => {

    const onlineHandler = () => setOnline(true);
    const offlineHandler = () => setOnline(false);

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {

      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);

    };

  }, []);

  // ---------------- WINDOW RESIZE ----------------
  useEffect(() => {

    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };

  }, []);

  // ---------------- ADD TO CART ----------------
  const addToCart = (product) => {

    setCart([...cart, product]);

  };

  // ---------------- REMOVE ----------------
  const removeFromCart = (id) => {

    const updated = cart.filter((item) => item.id !== id);

    setCart(updated);

  };

  // ---------------- LOGIN PAGE ----------------
  if (!isLoggedIn) {

    return (

      <div
        style={{
          textAlign: "center",
          marginTop: "100px"
        }}
      >

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={login}>
          Login
        </button>

      </div>

    );
  }

  // ---------------- DASHBOARD ----------------

return (
  <div style={{ padding: "20px" }}>

    <h1>React Shopping Store</h1>

    <p>
      Status :
      {online ? " 🟢 Online" : " 🔴 Offline"}
    </p>

    <p>
      Screen Width : {width}px
    </p>

    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>

    <br /><br />

    <input
      type="text"
      placeholder="Search Product..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <h2>
      Cart Items : {cart.length}
    </h2>

    <h2>
      Total : ₹{total.toFixed(2)}
    </h2>

    {loading ? (

      <h2>Loading Products...</h2>

    ) : (

      filteredProducts.map((product) => (

        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            margin: "15px",
            padding: "15px",
            borderRadius: "10px"
          }}
        >

          <img
            src={product.image}
            alt={product.title}
            width="120"
          />

          <h3>{product.title}</h3>

          <p>₹ {product.price}</p>

          <button
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

          <button
            onClick={() => removeFromCart(product.id)}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </button>

        </div>

      ))

    )}

  </div>
);

}

export default App;