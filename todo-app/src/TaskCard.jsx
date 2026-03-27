function TaskCard({ title, completed }) {
    return (
      <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
        <h3>{title}</h3>
        <p>{completed ? "✅ Done" : "❌ Not Done"}</p>
      </div>
    );
  }
  
  export default TaskCard;