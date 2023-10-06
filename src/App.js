// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const apiBaseURL = "https://rgtestnode.azurewebsites.net/api/v1/"

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(apiBaseURL + "/task").then((data) => {
      return data.json()
    }).then((data) => {
      console.log("Data", data);
      setTasks(data.data)
    }).catch((error) => {
      console.log("error", error);
    })
  }, [])

  return (
    <div>
    <h2>List of Task: </h2>
      {tasks && tasks.map((task, index) => {
        return (<h3 key={index}>{task.title}</h3>)
      })}
    </div>
  );
}

export default App;
