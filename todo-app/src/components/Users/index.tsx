import React from 'react'
import { nanoid } from 'nanoid'
import AddUser from "./img/add.png"
import userAvatar from '../../Store/avatar/user.jpg'
import './index.css'
import { User } from '../../Store/interfaces'

interface Iprops {
  avatar: User[];
  userLength: number;
  addUser: (userObj: User) => void;
  showCurrentUser: (user: string,userName:string) => void;
}


export default function Users(props: Iprops) {


  const addUser = () => {
    const userObj = {
      id: nanoid(),
      avatar: 'userAvatar',
      user: `user${props.userLength + 1}`,
      userName: ''
    };
    props.addUser(userObj);
  }

  const currentUser = (user: string,userName:string) => {
    props.showCurrentUser(user,userName);
  }
  return (
    <div className='users'>
      <ul className='user'>
        {
          props.avatar.map((userObj) => {
            return (
              <li key={userObj.id}>
                <img src={userAvatar} alt="" onClick={() => currentUser(userObj.user,userObj.userName)} />
              </li>
            )
          })
        }
      </ul>
      <img className='addUser' src={AddUser} alt="" onClick={addUser} />
    </div>
  )
}
