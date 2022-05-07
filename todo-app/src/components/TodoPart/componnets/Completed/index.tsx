import React from 'react'
import { Todo } from '../../../../Store/interfaces';
import './index.css'

interface Iprops {
    updateTodo: (id: string, done: boolean,currentUser:string) => void;
    deleteTodo: (id: string,current:string) => void
    completedList: Todo[];
    currentUser:string;
}
export default function Completed(props: Iprops) {


    const [flag, setFlag] = React.useState(false);

    const mouseEvent = (flag: boolean) => {
        setFlag(flag);
    }

    const [titleFlag, setTitleFlag] = React.useState(false);

    const titleMouseEvent = (flag: boolean) => {
        setTitleFlag(flag);
    }

    const changeStatus = (id: string) => {
        props.updateTodo(id,  false ,props.currentUser);
    }


    const [ishide, setIShide] = React.useState(false)

    const isHide = () => {
        setIShide(!ishide);
    }

    const deteleCompleted = (id: string) => {
        if (window.confirm('确定删除吗？')) {
            props.deleteTodo(id,props.currentUser);
        }
    }

    return (
        <div className='completed' >
            <div className='completedTitle' style={{ backgroundColor: titleFlag ? '#d3d3d3' : '#f0f0f0' }}
                onMouseEnter={() => titleMouseEvent(true)}
                onMouseLeave={() => titleMouseEvent(false)}
            >
                <span>completed({props.completedList.length})</span>
                <div className={ishide ? 'upArrow' : 'arrow'} onClick={isHide}></div>
            </div>
            <ul>
                {
                    props.completedList.map((todo) => {
                        return (
                            <li key={todo.id} style={{ backgroundColor: flag ? '#d3d3d3' : '#f0f0f0', display: ishide ? 'none' : 'block' }}
                                onMouseEnter={() => mouseEvent(true)}
                                onMouseLeave={() => mouseEvent(false)}
                            >
                                {todo.name}
                                <button className='detele' style={{ display: flag ? 'block' : 'none' }} onClick={() => changeStatus(todo.id)}>未完成</button>
                                <button style={{ display: flag ? 'block' : 'none' }} onClick={() => deteleCompleted(todo.id)}>删 除</button>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}
