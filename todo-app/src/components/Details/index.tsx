import React from 'react'
import { Todo } from '../../Store/interfaces'
import AddDate from './components/AddDate'
import AddDetail from './components/AddDetail'
import Header from './components/Header'
import Introduction from './components/Introduction'
import { Detail as DetailType } from '../../Store/interfaces'
import './index.css'

interface Iprops {
  todo: Todo[];
  currentUser: string;
  currentType: string;
  deleteTodo: (id: string, currentUser: string) => void;
  changeName: (id: string, name: string) => void;
  updateDetail: (Detail: DetailType[]) => void;
  addDate: (date: string) => void;
}
export default function Detail(props: Iprops) {
  const todo = props.todo[0];

  return (
    <div className='detail'>
      <Header id={todo.id} deleteTodo={props.deleteTodo} currentUser={props.currentUser} />
      <Introduction name={todo.name} id={todo.id} changeName={props.changeName} />
      { props.currentType === 'Todos' ?
        <AddDate addDate={props.addDate} /> : null}
      <AddDetail details={todo.Detail}
        updateDetail={props.updateDetail}
      />
    </div>
  )
}
