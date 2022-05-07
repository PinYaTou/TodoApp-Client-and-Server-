import React, { useState } from 'react'
import './index.css'
import { nanoid } from 'nanoid';
import { Detail } from '../../../../Store/interfaces';

interface Iprops {
  details: Detail[];
  updateDetail: ( Detail: Detail[]) => void;
}

export default function AddDetail(props: Iprops) {



  const [value, setValue] = useState('');

  function handleChange(e: { target: { value: React.SetStateAction<string>; }; }) {
    setValue(e.target.value);
  }

  function handleKeyUp(event: { key: any; target: any; }) {
    const { key, target } = event;
    if (key !== 'Enter') return;
    if (target.value.trim() === '') {
      alert('输入不能为空');
      return;
    }
    const detailObj = { id: nanoid(), title: target.value };
    props.updateDetail([detailObj]);
    setValue('')
  }


  return (
    <div className='addDetail'>
      <input className='addSubtasks' type="text" placeholder='Add subtasks'
        value={value} onChange={handleChange}
        onKeyUp={handleKeyUp} />
      <ul >
        {

          props.details.map((detail,index) => {
            return (
              <li key={detail.id}>
                <span className='radio'>{index+1}.</span>
                <span className='showSubtasks' >{detail.title}</span>
              </li>
            )
          })
        }

      </ul>
    </div>
  )


}
