import React from 'react';
import { MdCheck, MdDeleteOutline } from 'react-icons/md'
import "./TaskItem.css";

/**
 * Компонент для отображения одной задачи.
 */
export const TaskItem = ({task, change, taskDelete}) => {
  return (
    <div className="task-item">
      <div className="checkbox" onClick={() => change(task.id)}>
        { task.isCompleted && <MdCheck size="18px" className="checkbox-icon"/> }
      </div>
      <div className={`task-item__header ${task.isCompleted ? "header-completed" : ""}`}>
        { task.title }
      </div>
      <div className="delete" onClick={() => taskDelete(task.id)}>
        <MdDeleteOutline size="22px" />
      </div>
    </div>
  );
}

  