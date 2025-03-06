import axios from "axios";
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [dataa, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  const ans = dataa.map((item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.email}</td>
        <td>{item.name}</td>
        <td>{item.body}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>name</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </table>
  );
}

export default App;