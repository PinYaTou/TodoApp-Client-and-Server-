import React from 'react'
import './index.css'


interface Iprops {
  flag: boolean;
}
export default function CraeteNewList(props: Iprops) {
  return (
    <div className='createNewList' style={{ opacity: props.flag ? 1 : 0 }} >
      <span className="create">Create new list</span>
    </div>
  )
}
