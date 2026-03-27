import TaskCard from "./TaskCard";

function App() {
  return (
    <div>
      <h1>Welcome to My To-Do App</h1>

      <TaskCard title="Study React" date="Tomorrow" />
      <TaskCard title="Do Assignment" date="Monday" />
      <TaskCard title="Practice LeetCode" date="Everyday" />
    </div>
  );
}

export default App;