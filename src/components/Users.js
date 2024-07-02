

// // Burdada json formatlarının komple users kısımlarını çektik kullanıcı id si ve kullanıcı adlarına eriştik 


import { Link, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import User from './User';

// Kullanıcı ID'si ve isimlerine erişim sağlayan bileşen
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>USERS</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))
        }
      </ul>

      <Routes>
        <Route path=":id" element={<User />} />
        <Route path="/" element={<h3>Please select a user to see details</h3>} />
      </Routes>
    </div>
  );
}

export default Users;

// Kullanıcı ID'si olmadığında gösterilecek mesaj bileşeni
