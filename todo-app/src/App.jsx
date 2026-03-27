import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect → fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.slice(0, 5)); // take only 5
        setLoading(false);
      });
  }, []);

  // check if all completed
  const allCompleted =
    tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to My To-Do App</h1>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* No tasks */}
      {!loading && tasks.length === 0 && (
        <p>No tasks for today!</p>
      )}

      {/* Task list */}
      {!loading &&
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            completed={task.completed}
          />
        ))}

      {/* All completed message */}
      {allCompleted && <p>Keep up the good work! 🎉</p>}
    </div>
  );
}

export default App;