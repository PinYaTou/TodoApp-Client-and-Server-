import React from 'react'
import Header from './componnets/Header'
import ListPart from './componnets/List'
import Completed from './componnets/Completed'
import { Todo, Detail } from '../../Store/interfaces'
import './index.css'

interface Iprops {
  undoneList: Todo[];
  currentUser: string;
  currentType: string;
  currentTypeTitle: string;
  todayTodos: Todo[];
  tomorrowTodos: Todo[];
  afterTomotrrowTodos: Todo[];
  pastTodos: Todo[];
  addTodo: (todoObj: Todo) => void;
  updateTodo: (id: string, done: boolean, currentUser: string) => void;
  deleteTodo: (id: string, currentUser: string) => void;
  selectCurrentTodo: (id: string) => void;
  deleteDetail: (todoId: string, detailId: string, Detail: Detail[]) => void;
}
export default function TodoPart(props: Iprops) {

  const undoneList = props.currentTypeTitle === 'Todos' || props.currentTypeTitle === 'Hobbies'
    ? props.undoneList : props.currentTypeTitle === 'Today'
      ? props.todayTodos : props.currentTypeTitle === 'Tomorrow'
        ? props.tomorrowTodos : props.currentTypeTitle === 'After tomorrow'
          ? props.afterTomotrrowTodos : props.currentTypeTitle === 'Past'
            ? props.pastTodos : props.undoneList;

  const newUndoneList = undoneList.filter((todo) => {
    return todo.done === false;
  }
  )

  const completedList = undoneList.filter((todo) => {
    return todo.done === true;
  }
  )
  return (
    <div className='todoPart'>
      <div className='mainPart'>
        <h2 className='title'>{props.currentType}</h2>
        <Header addTodo={props.addTodo}
          currentUser={props.currentUser}
          currentTypeTitle={props.currentTypeTitle}
        />
        <ListPart newUndoneList={newUndoneList}
          currentUser={props.currentUser}
          currentTypeTitle={props.currentTypeTitle}
          updateTodo={props.updateTodo}
          selectCurrentTodo={props.selectCurrentTodo}
          deleteDetail={props.deleteDetail}
        />
        <Completed completedList={completedList}
          currentUser={props.currentUser}
          updateTodo={props.updateTodo}
          deleteTodo={props.deleteTodo} />
      </div>
    </div>
  )
}
