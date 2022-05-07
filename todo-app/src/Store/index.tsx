/* eslint-disable array-callback-return */

import { Todo } from "./interfaces";

export function getTodayTodos(todo: Todo[]) {

    let todayTodo: Todo[] = [];
    todo.map((todo) => {
        const d = new Date();
        const date1 = new Date(todo.date).getTime()
        const date2 = d.getTime();
        const day = ((date2 - date1) / (24 * 60 * 60 * 1000));
        if (day < 1 && day >= 0) {
            todayTodo.push(todo)
        }
    })
    return todayTodo
}

export function getTomorrowTodos(todo: Todo[]) {

    let tomorrowTodos: Todo[] = [];
    todo.map((todo) => {
        const d = new Date();
        const date1 = new Date(todo.date).getTime()
        const date2 = d.getTime();
        const day = Math.floor((date2 - date1) / (24 * 60 * 60 * 1000));
        if (day >= -1 && day < 0) {
            tomorrowTodos.push(todo)
        }
    })
    return tomorrowTodos
}
export function getAfterTomorrowTodos(todo: Todo[]) {

    let afterTomorrowTodos: Todo[] = [];
    todo.map((todo) => {
        const d = new Date();
        const date1 = new Date(todo.date).getTime()
        const date2 = d.getTime();
        const day = Math.floor((date2 - date1) / (24 * 60 * 60 * 1000));
        if (day < -1) {
            afterTomorrowTodos.push(todo)
        }
    })
    return afterTomorrowTodos
}
export function getPastTodos(todo: Todo[]) {

    let pastTodos: Todo[] = [];
    todo.map((todo) => {
        const d = new Date();
        const date1 = new Date(todo.date).getTime()
        const date2 = d.getTime();
        const day = Math.floor((date2 - date1) / (24 * 60 * 60 * 1000));
        if (day > 1 && day < 7) {
            pastTodos.push(todo)
        }
    })
    return pastTodos
}