function App() {
  const tasks = ["Study", "Eat", "Sleep"];

  return (
    <div>
      <h1>My Tasks</h1>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

