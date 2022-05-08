/* eslint-disable array-callback-return */


import { Todo } from "./interfaces";

function getTypesTodos(todo: Todo[], limit1: number, limit2: number) {

    let todayTodo: Todo[] = [];
    todo.map((todo) => {
        const d = new Date();
        const date1 = new Date(todo.date).getTime()
        const date2 = d.getTime();
        const day = ((date2 - date1) / (24 * 60 * 60 * 1000));
        if (day < limit1 && day >= limit2) {
            todayTodo.push(todo)
        }
    })
    return todayTodo
}

export function getTodayTodos(todo: Todo[]) {

    return getTypesTodos(todo, 1, 0)
}

export function getTomorrowTodos(todo: Todo[]) {

    return getTypesTodos(todo, 0, -1)
}
export function getAfterTomorrowTodos(todo: Todo[]) {

    return getTypesTodos(todo, -1, -2)
}
export function getPastTodos(todo: Todo[]) {

    return getTypesTodos(todo, 7, 1)
}