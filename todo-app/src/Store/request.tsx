import { URL_ADDREST } from './Http';



export function getRequest(url:string) {
    return fetch(`${URL_ADDREST}${url}`).then(res => {
        return res.json();
    })
        .catch(err => {
            console.error(err);
        });
}

export function postRequest(param:any, url: string) {
    return fetch(`${URL_ADDREST}${url}`, {
        method: 'post',
        body: JSON.stringify({
            ...param
        }),
        headers: {
            'Content-Type': 'application/json' 
        },
    }).then(res => {
        return res.json()
    }).catch(function (error) {
        console.log(error)
    })
}