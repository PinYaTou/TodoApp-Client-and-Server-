import React from 'react'
import { Todo } from '../../../../Store/interfaces';
import './index.css'

interface Iprops {
  flag: boolean;
  todo:Todo[];
  todayTodos: Todo[];
  tomorrowTodos: Todo[];
  afterTomotrrowTodos: Todo[];
  pastTodos: Todo[];
  getCurrentDateType: (type: string) => void;
}

export default function DateTypeList(props: Iprops) {

  const handleOnclick = (type: string) => {
    props.getCurrentDateType(type);
  }

  return (
    <div className='dateTypeList' style={{ opacity: props.flag ? 1 : 0 }}>
      <div className='search'>
        <input type="text" placeholder='Search' />
      </div>
      <ul>
        <li onClick={() => handleOnclick('Today')}>
          Today
          <span>({props.todayTodos.length})</span>
        </li>
        <li onClick={() => handleOnclick('Tomorrow')}>
          Tomorrow
          <span>({props.tomorrowTodos.length})</span>
        </li>
        <li onClick={() => handleOnclick('After tomorrow')}>
          After tomorrow
          <span>({props.afterTomotrrowTodos.length})</span>
        </li>
        <li onClick={() => handleOnclick('Past')}>
          Past
          <span>({props.pastTodos.length})</span>
        </li>
        <li onClick={() => handleOnclick('All')}>
          All
          <span>({props.todo.length})</span>
        </li>
      </ul>
    </div>
  )
}
