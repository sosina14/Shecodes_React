function TaskCard(props) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>Due: {props.date}</p>
      </div>
    );
  }
  
  export default TaskCard;