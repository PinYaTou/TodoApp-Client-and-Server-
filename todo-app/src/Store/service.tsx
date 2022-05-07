import {  Detail, Todo, User } from "./interfaces";
import { getRequest ,postRequest} from "./request";

export function getUsers() {
    return getRequest('/users/find')
}

export function addUser(newUser: User) {
    return postRequest(newUser, '/users/add')
}

export function changeUser(user:string,userName:string) {
    return postRequest({user,userName}, '/users/update')
}

export function getUserTypes(url:string) {
    return getRequest( `/types/find/${url}`)
}

export function updateCurrentType(id:string,length:string) {
    return postRequest({id,length},'/types/update')
}

export function getTodos(type:string,url:string) {
    return getRequest(`/${type.toLowerCase()}/find/${url}`)
}

export function getCurrentTodo(type:string,url:string) {
    return getRequest(`/${type.toLowerCase()}/findCurrent/${url}`)
}


export function addTodo(type:string,todoObj:Todo) {

    return postRequest(todoObj, `/${type.toLowerCase()}/add`)
}

export function updateTodo(type:string,id: string, done: boolean,user:string) {
    return  postRequest({id,done,user}, `/${type.toLowerCase()}/update`)
}

export function addTodoDate(type:string,id: string, date: string,user:string) {
    return  postRequest({id,date,user}, `/${type.toLowerCase()}/addDate`)
}

export function changeCurrentTodoName(type:string,id:string,name:string) {
    return  postRequest({id,name},`/${type.toLowerCase()}/updateName`)
}

export function updateCurrentDetail(type:string,id:string,Detail:Detail[]) {
    return postRequest({id,Detail},`/${type.toLowerCase()}/updateDetail`)
}

export function deleteTodo(type:string,id: string,user:string) {
    return postRequest({id,user}, `/${type.toLowerCase()}/del`)
}

