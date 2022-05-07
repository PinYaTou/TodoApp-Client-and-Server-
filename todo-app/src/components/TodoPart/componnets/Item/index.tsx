import React from 'react'
import { Detail } from '../../../../Store/interfaces';
import './index.css'

interface Iprops {
   id: string;
   name: string;
   date: string;
   Detail: Detail[];
   currentUser: string;
   currentTypeTitle: string;
   updateTodo: (id: string, done: boolean, currentUser: string) => void;
   selectCurrentTodo: (id: string) => void;
   deleteDetail: (todoId:string,detailId:string,Detail:Detail[]) => void;
}
export default function Item(props: Iprops) {

   const [flag, setFlag] = React.useState(false);

   const mouseEvent = (flag: boolean) => {
      setFlag(flag);
   }

   const handleCheck = () => {
      props.updateTodo(props.id, true, props.currentUser);
   }

   const [ishide, setIShide] = React.useState(true)

   const isHide = () => {
      setIShide(!ishide);
   }
   const handleClick = () => {
      props.selectCurrentTodo(props.id);
   }

   const deteleDetail =(todoId:string,detailId:string,Detail:Detail[]) =>{
      if (window.confirm('确定完成了吗？')) {
         props.deleteDetail(todoId,detailId,Detail)
     }
     
   }

   return (
      <div className='todoList'>
         <li className='todo' style={{ backgroundColor: flag ? '#d3d3d3' : '#f0f0f0' }}
            onMouseEnter={() => mouseEvent(true)} onMouseLeave={() => mouseEvent(false)}
            onClick={handleClick}
         >
            <input type='radio' onChange={handleCheck} />
            <span>{props.name}</span>
            <div className='date' style={{ display: props.date !== '' ? 'block' : 'none' }}>{props.date}</div>
         </li>
         <div className={ishide ? 'upArrow' : 'arrow'} onClick={isHide}></div>



         <ul className='detailUl'>
            {
               props.Detail && props.Detail.map((detail, index) => {
                  return (
                     <li key={detail.id} style={{ display: ishide ? 'none' : 'block' }}>
                        <span >({index + 1})</span> &nbsp;
                        {detail.title}
                        <button className='detele' 
                        onClick={() => deteleDetail(props.id,detail.id,props.Detail)}>完 成</button>
                     </li>
                  )
               })
            }
         </ul>
      </div>

   )
}
