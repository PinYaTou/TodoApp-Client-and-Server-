import React from 'react'
import { Type } from '../../../../Store/interfaces';
import './index.css'


interface Iprops {
  flag: boolean;
  currentTypes:Type[];
  getCurrentType: (type: string,id:string) => void;
}
export default function TypeList(props: Iprops) {

  const handleGetTypes = (title:string,id:string) => {
    props.getCurrentType(title,id);
  }

  return (
    <div className='typeList' style={{ opacity: props.flag ? 1 : 0 }}>
      <ul>

        {
          props.currentTypes.map((types) => {
            return (
              <li key={types.id} onClick={() => handleGetTypes(types.title,types.id)} /*className={types.selected ? 'selected' : ''}*/>
                {types.title}
                <span>({types.length})</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
