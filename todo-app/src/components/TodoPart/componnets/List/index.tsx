import React from 'react'
import { Todo ,Detail} from '../../../../Store/interfaces'
import Item from '../Item'
import './index.css'

interface Iprops {
  newUndoneList: Todo[];
  currentUser: string;
  currentTypeTitle: string;
  updateTodo: (id: string, done: boolean, currentUser: string) => void;
  selectCurrentTodo: (id: string) => void;
  deleteDetail: (todoId:string,detailId:string,Detail:Detail[]) => void;
}
export default function listPart(props: Iprops) {


  return (
    <div className='listPart'>
      <ul>
        {
          props.newUndoneList.map((todo) => {
            return <Item key={todo.id}
              {...todo}
              currentUser={props.currentUser}
              currentTypeTitle={props.currentTypeTitle}
              updateTodo={props.updateTodo}
              selectCurrentTodo={props.selectCurrentTodo}
              deleteDetail={props.deleteDetail}
            />
          })
        }
      </ul>
    </div>
  )
}
