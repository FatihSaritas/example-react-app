import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom'
import axios from "axios";

//Burada usEffect ve Use state ile çalıştık bir fake api üzerinde öalışma gerçekleştirdik.
//axios ile json formatında ki verileri çekmeyi rahat bir şekilde gerçekleştirdik .
// parametreyi app.js içinde /:id olarak belirttik sayfa geçişleri için daha sonra next butonu oluştururarak bir sonraki json erişmek için fonsikyon yazdık  burada dikkat et json verilerinin id ile çekimini gerççekleştirdik

function User() {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
      <code>{JSON.stringify(user)}</code>

      <br /><br />

      <Link to={`/users/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
    </div>
  )
}

export default User
