import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskItem } from './TaskItem';
import "./TaskList.css"

/**
 * Компонент для отображения списка задач.
 */
export const TaskList = ({ tasksData = [] }) => {
  const [tasks, setTodos] = useState(tasksData);
  const [title, setTitle] = useState('');

  /**
   * Изменяет статус задачи.
   * @param {*} id Идентификатор задачи.
   */
  const change = (id) => {
    if (id == null) return;

    const copy = [...tasks];

    const current = copy.find((i) => i.id === id);
    if (current === undefined) return;

    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  }

  /**
   * Добавляет новую задачу в массив задач.
   * @param {*} title Описание задачи.
   */
  const addTodo = (title) => {
    if (title == null || title === "" || title === undefined) {
      alert('Описание задачи не может быть пустым.')
      return;
    };

    const copy = [...tasks];

    const newTask = {
      id: uuidv4(),
      title,
      isCompleted: false
    }

    copy.unshift(newTask);
    setTodos(copy);
    setTitle('');
  }

  /**
   * Выполняет удаление задачи из массива задач.
   * @param {*} id Идентификатор задачи.
   */
  const taskDelete = (id) => {
    if (id == null) return;

    const copy = [...tasks];

    const currentIndex = copy.findIndex((i) => i.id === id);
    if (currentIndex === -1) return;

    // eslint-disable-next-line no-restricted-globals
    const isOk = confirm('Вы точно хотите удалить задачу?');
    if (!isOk) return;

    copy.splice(currentIndex, 1);
    setTodos(copy);
  }

  return (
    <div className="task-list">
      <header>
        Список задач
      </header>
      <main>
        <input
          type="text" 
          placeholder="Новая задача"
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          onKeyDown={e => e.key === 'Enter' && addTodo(title)} 
          className="task-list__input"
        />
        <div className="tasks">
          {tasks.map((task) => 
            <TaskItem
              key={task.id} 
              task={task} 
              change={change} 
              taskDelete={taskDelete}
            ></TaskItem>
          )}
        </div>
      </main>
    </div>
  );
}
  