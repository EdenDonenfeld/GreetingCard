import React from 'react';
import './App.css';
import Title from './components/Title';
import Task from './components/Task';
import Input from './components/Input';
import CheckAll from './components/CheckAll';

interface TaskType {
  name: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = React.useState<TaskType[]>([]);

  const addTask = (name: string) => {
    setTasks([...tasks, { name: name, isChecked: false }]);
  };

  const toggleChecked = (index: number) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, isChecked: !task.isChecked } : task
    ));
  }

  const checkAll = () => {
    setTasks(tasks.map(task => ({ ...task, isChecked: true })));
  }

  return (
    <div className="App">
      <Title text="Get Sh*t Done: "/>
      <div>
        {tasks.map((task, index) => (
          <Task key={index} name={task.name} isChecked={task.isChecked} toggleChecked={toggleChecked} index={index} />
        ))}
      </div>
      <Input addTask={addTask}/>
      <CheckAll checkAll={checkAll} />
    </div>
  ); 
}

export default App;
