import React from 'react'
import { Todo,Type } from '../../Store/interfaces'
import CraeteNewList from './components/CraeteNewList'
import DateTypeList from './components/DateTypeList'
import Header from './components/Header'
import TypeList from './components/TypeList'
import './index.css'

interface Iprops {
  currentUser: string;
  currentUserName: string;
  flag: boolean;
  currentTypes: Type[];
  todo:Todo[];
  todayTodos:Todo[];
  tomorrowTodos: Todo[];
  afterTomotrrowTodos: Todo[];
  pastTodos: Todo[];
  getHeaderFlag: (flag: boolean) => void;
  changeUserName: (user: string, newUserName: string) => void;
  getCurrentType: (type: string,id:string) => void;
  getCurrentDateType:(type:string) => void;
}

export default function Types(props: Iprops) {
  return (
    <div className='types'>
      <Header getHeaderFlag={props.getHeaderFlag}
        currentUserName={props.currentUserName}
        currentUser={props.currentUser}
        changeUserName={props.changeUserName} />
      <DateTypeList flag={props.flag}
      todo={props.todo}
      todayTodos={props.todayTodos}
      tomorrowTodos={props.tomorrowTodos}
      afterTomotrrowTodos={props.afterTomotrrowTodos}
      pastTodos={props.pastTodos}
      getCurrentDateType={props.getCurrentDateType} />
      <TypeList flag={props.flag}
        currentTypes={props.currentTypes}
        getCurrentType={props.getCurrentType}
      />
      <CraeteNewList flag={props.flag} />
    </div>
  )
}
