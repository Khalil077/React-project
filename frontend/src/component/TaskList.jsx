import styles from './Tasklist.module.css'

const Task = ({ task }) => {
    return (
      <li className={`${styles.task}`}>
        {task.id}
        <button className={`${styles.clear}` }> Clear</button>
      </li>
    );
  };
  

  function TaskList({ tasks }) {
    return (
      <ul className={styles.taskList}> {}
        {tasks && tasks.length > 0 ? (
          tasks.map(task => <Task key={task.id} task={task} />)
        ) : null}
      </ul>
    );
  }
  
  export default TaskList;