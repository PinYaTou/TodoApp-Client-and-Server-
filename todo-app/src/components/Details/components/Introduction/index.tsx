import React , {useEffect, useState} from 'react'
import './index.css'

interface Iprops {
  name: string;
  id: string;
  changeName:(id:string,name:string) => void;
}
export default function Introduction(props: Iprops) {

  const [value, setValue] = useState(props.name);

  useEffect(() => {
    setValue(props.name);
  },[props.name])

  function changeName(e: { target: { value: React.SetStateAction<any>; }; }) {
    setValue(e.target.value);
  }

  function handleKeyUp(event: { key: any; target: any; }) {
    const { key, target } = event;
    if (key !== 'Enter') return;
    if (target.value.trim() === '') {
      alert('输入不能为空');
      return;
    }
    props.changeName(props.id,target.value);
    setValue(target.value);
  }
  return (
    <div className='introduction'>
      <input type="text" name="" id="" value={value} onChange={changeName} onKeyUp={handleKeyUp} />
      <textarea placeholder='Add introduction'></textarea>
    </div>
  )
}
