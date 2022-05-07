import React ,{useEffect, useState}from 'react'
import userAvatar from '../../../../Store/avatar/user.jpg'
import './index.css'

interface Iprops {
  getHeaderFlag: (flag: boolean) => void;
  currentUserName: string;
  currentUser:string;
  changeUserName: (user:string,newUserName:string) => void;
}

export default function Header(props: Iprops) {


  useEffect(()=>{
    setValue(props.currentUserName);
  },[props.currentUserName])

  const [flag, setFlag] = React.useState(true);


  const changeArrow = () => {
    props.getHeaderFlag(flag)
    setFlag(!flag);
  }


  const [value, setValue] = useState(props.currentUserName);

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
    props.changeUserName(props.currentUser,target.value);
    setValue(target.value);
  }
  return (
    <div className='header'>
      <img src={userAvatar} alt="" />
      <input value={value}  onChange={handleChange} onKeyUp={handleKeyUp} />
      <div className={flag ? 'arrow' : 'upArrow'} onClick={changeArrow}></div>
    </div>
  )
}
