import styles from './Tasklist.module.css'

  function TaskList({ tasks, projectId, setProject }) {
    const Task = ({ task }) => {
      return (
        <li className={`${styles.task}`}>
          {task.id}
          <button className={`${styles.clear}`} onClick={() => handleTaskDelete(task.id)}> Clear</button>
        </li>
      );
    };
    const handleTaskDelete = (taskId) => {
      fetch(`http://localhost:3000/task/SoftRemove/${projectId}/${taskId}`, {  
        method: "DELETE",
      })
        .then((res) => {
          if (res) {
            setProject((prevProject) => ({
              ...prevProject,
              ListeTasks: prevProject.ListeTasks.filter((task) => task.id !== taskId),
          }));
          } else {
            alert('Error deleting the task.');
          }
        })
        .catch((err) => {
          console.error('Error deleting task:', err);
          alert('Error deleting the task.');
        });
    };
    return (
      <ul className={styles.taskList}> {}
        {tasks && tasks.length > 0 ? (
          tasks.map(task => <Task key={task.id} task={task} />)
        ) : null}
      </ul>
    );
  }
  
  export default TaskList;