

// import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import About from './components/About';
// import Home from './components/Home';
// import Users from './components/Users';


// // //Burada reac router ile ilk olarak basit bir proje oluşturduk react içinde  daha sonra linklerimizi sayfalar halinde böldük 
// // //bunları routes içerisinde çağırmayı gördül Link ile a href gibi link vermeyi öğrendik daha sonra url parametre ile çalışmayı öğrendik 
// // // Diğer kısımları diğer sayfalarda anlatıyor olacağım

// // //pages

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <NavLink exact to="/" activeClassName="active-link" style={{ backgroundColor: "black", color: "white", padding: "5px 10px", textDecoration: "none" }}>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" activeClassName="active-link" style={{ backgroundColor: "black", color: "white", padding: "5px 10px", textDecoration: "none" }}>About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/users" activeClassName="active-link" style={{ backgroundColor: "black", color: "white", padding: "5px 10px", textDecoration: "none" }}>Users</NavLink >
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/users/*" element={<Users />} /> {/* '*' kullanarak nested rotaları destekliyoruz */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import About from './components/About';
// import Home from './components/Home';
// import Users from './components/Users';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <NavLink exact to="/" activeStyle={{ color: "green" }}>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" activeStyle={{ color: "green" }}>About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/users" activeStyle={({ ccolor: "green" })}>Users</NavLink>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/users/*" element={<Users />} />
//         </Routes>
//       </div>
//     </Router >
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import Error404 from './components/Error404';

import "./index.css"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact="true" to="/" className="nav-link" name="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className="nav-link">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="*" element={<Error404 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
