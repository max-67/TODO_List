import { v4 as uuidv4 } from 'uuid';
import './App.css';

import { TaskList } from './components/TaskList';

/**
 * Массив задач.
 */
const tasks = [
  {
    id: uuidv4(),
    title: 'Задача 1',
    isCompleted: false
  },
  {
    id: uuidv4(),
    title: 'Задача 2',
    isCompleted: true
  }
];

function App() {
  return (
    <div className="App">
      <TaskList tasksData={tasks}></TaskList>
    </div>
  );
}

export default App;
