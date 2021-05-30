import { configSite } from './modules/config';
const { Url } = configSite;

export const getAllTasks = async url => {
    return await fetch(url)
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const addTask = async formData => {
    return await fetch(Url+'/create?developer=softlex-kamran', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const logIn = async formData => {
    return await fetch(Url+'/login?developer=softlex-kamran', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const editTask = async (formData, id) => {
    return await fetch(Url+`/edit/${id}?developer=softlex-kamran`, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}