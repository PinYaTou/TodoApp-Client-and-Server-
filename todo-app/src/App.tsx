import { Fragment, useEffect, useState } from 'react'
import Details from './components/Details'
import TodoPart from './components/TodoPart'
import Types from './components/Types'
import Users from './components/Users'
import { getAfterTomorrowTodos, getPastTodos, getTodayTodos, getTomorrowTodos } from './Store'
import { Todo, Detail, User } from './Store/interfaces'
import {
  addUser, changeUser, getTodos, getUsers, changeCurrentTodoName,
  addTodo, updateTodo, deleteTodo, getCurrentTodo, updateCurrentDetail, getUserTypes, updateCurrentType, addTodoDate,
} from './Store/service'

export default function App() {

  //Users
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

  const showCurrentUser = (user: string, userName: string) => {
    setCurrentUser(user);
    setCurrentUserName(userName);
    getCurrentUserType(user)
    setCurrentTypeTitle('');
    setCurrentTodo([]);
  }


  // types
  const [flag, setFlag] = useState(true);

  const [currentTypes, setCurrentTypes] = useState([]);

  const [currentTypeTitle, setCurrentTypeTitle] = useState('');

  const [currentTypeId, setCurrentTypeId] = useState('');


  const getHeaderFlag = (flag: boolean) => {
    setFlag(flag);
  }

  const changeUserName = (user: string, newUserName: string) => {
    changeUser(user, newUserName).then(data => {
      setCurrentUserName(data.userName);
    })
  }

  const getCurrentUserType = (user: string) => {
    getUserTypes(user).then(data => {
      setCurrentTypes(data.rel);
    })
  }


  const getCurrentType = (title: string, id: string) => {
    setCurrentTypeTitle(title);
    setCurrentTypeId(id);
    setCurrentTodo([]);
  }


  const updateCurrentTypeLength = (currentTypeId: string, todo: Todo[]) => {
    const length = todo.length.toString();
    updateCurrentType(currentTypeId, length).then()
    getCurrentUserType(currentUser);
  }


  const getCurrentDateType = (type: string) => {
    setCurrentTypeTitle(type);
    setCurrentTodo([]);
  }

  //todos

  const [todo, setTodo] = useState([]);

  const [currentTodo, setCurrentTodo] = useState([]);

  const [currentTodoId, setCurrentTodoId] = useState('');

  const [currentDetail, setCurrentDetail] = useState([]);

  const [currentDate, setCurrentDate] = useState('');

  const [todayTodos, setTodayTodos] = useState<Todo[]>([]);

  const [tomorrowTodos, setTomorrowTodos] = useState<Todo[]>([]);

  const [afterTomotrrowTodos, setAfterTomotrrowTodos] = useState<Todo[]>([]);

  const [pastTodos, setPastTodos] = useState<Todo[]>([]);

  useEffect(() => {
    currentTypeTitle === 'Todos' || currentTypeTitle === 'Hobbies' ?
      getTodos(currentTypeTitle, currentUser).then(data => {
        setTodo(data.rel);
      }) : console.log();

  }, [currentUser, currentTodo, currentTypeTitle, currentDate])

  function handleAdd(todoObj: Todo) {
    addTodo(currentTypeTitle, todoObj).then(data => {
      setTodo(data.data);
      updateCurrentTypeLength(currentTypeId, data.data);
    })
  }

  

  function handleUpdate(id: string, done: boolean, currentUser: string) {
    const typeTitle = currentTypeTitle === 'Hobbies' ? 'Hobbies' : 'Todos';
    updateTodo(typeTitle, id, done, currentUser).then(data => {
      setTodo(data.data);
    });
  }

  function handleDelete(id: string, currentUser: string) {
    const typeTitle = currentTypeTitle === 'Hobbies' ? 'Hobbies' : 'Todos';
    deleteTodo(typeTitle, id, currentUser).then(data => {
      setTodo(data.data);
      updateCurrentTypeLength(currentTypeId, data.data);
      setCurrentTodo([]);
    })
  }

  function selectCurrentTodo(id: string) {
    setCurrentTodoId(id);
    currentTypeTitle === 'Todos' || currentTypeTitle === 'Hobbies' ?
      getCurrentTodo(currentTypeTitle, id).then(data => {
        setCurrentTodo(data.rel);
        setCurrentDetail(data.rel[0].Detail);
      }) : setCurrentTodo([]);
  }


  function changeTodoName(id: string, name: string) {
    changeCurrentTodoName(currentTypeTitle, id, name).then(data => {
      setCurrentTodo(data.data)
    })
  }

  function addDetail(Detail: Detail[]) {
    const newDetail = [...currentDetail, ...Detail]
    updateCurrentDetail(currentTypeTitle, currentTodoId, newDetail).then(data => {
      setCurrentTodo(data.data);
    })
  }

  function deleteDetail(todoId: string, detailId: string, Detail: Detail[]) {
    const newDetail = Detail.filter((detail) => {
      return detail.id !== detailId;
    })
    updateCurrentDetail(currentTypeTitle, todoId, newDetail).then(data => {
      setCurrentTodo(data.data);
    })
  }


  const addDate = (date: string) => {
    addTodoDate('Todos', currentTodoId, date, currentUser).then()
    setCurrentDate(date);
  }

  useEffect(() => {
    getTodos('todos', currentUser).then(data => {
      setTodayTodos(getTodayTodos(data.rel))
    }) 

    getTodos('todos', currentUser).then(data => {
      setTomorrowTodos(getTomorrowTodos(data.rel))
    }) 

    getTodos('todos', currentUser).then(data => {
      setAfterTomotrrowTodos(getAfterTomorrowTodos(data.rel))
    }) 

    getTodos('todos', currentUser).then(data => {
      setAfterTomotrrowTodos(getAfterTomorrowTodos(data.rel))
    }) 

    getTodos('todos', currentUser).then(data => {
      setPastTodos(getPastTodos(data.rel))
    }) 
  },[currentUser,todo])

    return (
      <Fragment>
        <Users avatar={avatar}
          userLength={userLength}
          addUser={handleUserAdd}
          showCurrentUser={showCurrentUser} />

        {
          currentUser ? <Types currentUserName={currentUserName}
            currentUser={currentUser}
            flag={flag}
            currentTypes={currentTypes}
            todo={todo}
            todayTodos={todayTodos}
            tomorrowTodos={tomorrowTodos}
            afterTomotrrowTodos={afterTomotrrowTodos}
            pastTodos={pastTodos}
            getCurrentType={getCurrentType}
            getHeaderFlag={getHeaderFlag}
            changeUserName={changeUserName}
            getCurrentDateType={getCurrentDateType}
          /> : ''}

        {
          currentTypeTitle ? <TodoPart undoneList={todo}
            currentUser={currentUser}
            currentType={currentTypeTitle}
            currentTypeTitle={currentTypeTitle}
            todayTodos={todayTodos}
            tomorrowTodos={tomorrowTodos}
            afterTomotrrowTodos={afterTomotrrowTodos}
            pastTodos={pastTodos}
            selectCurrentTodo={selectCurrentTodo}
            addTodo={handleAdd}
            updateTodo={handleUpdate}
            deleteTodo={handleDelete}
            deleteDetail={deleteDetail}
          /> : ''}

        {
          currentTodo[0] ? <Details todo={currentTodo}
            currentUser={currentUser}
            currentType={currentTypeTitle}
            deleteTodo={handleDelete}
            changeName={changeTodoName}
            updateDetail={addDetail}
            addDate={addDate}
          /> : '未选择'
        }

      </Fragment>
    )

  }
