
import {useState,useEffect} from 'react'
import { User } from './interfaces';
import { getUsers,addUser } from './service';

export default function useMyHook() {
    const [avatar, setAvatar] = useState([]);

    const [userLength, setUserLength] = useState(0);
  
    const [currentUser, setCurrentUser] = useState('');
  
    const [currentUserName, setCurrentUserName] = useState('');
  
    useEffect(() => {
      getUsers().then(data => {
        setAvatar(data.rel);
        setUserLength(data.rel.length);
      })
    }, [])
  
    const handleUserAdd = (newUser: User) => {
      addUser(newUser).then(data => {
        setAvatar(data.data);
        setUserLength(data.data.length);
      })
    }
  
    /*const showCurrentUser = (user: string, userName: string) => {
      setCurrentUser(user);
      setCurrentUserName(userName);
      getCurrentUserType(user)
      setCurrentTypeTitle('');
      setCurrentTodo([]);
    }*/

  return [handleUserAdd,avatar,userLength,currentUser,currentUserName,setCurrentUser,setCurrentUserName]
}
