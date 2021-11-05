import api from './api'

export function LoadDatas() {
    return new Promise((resolve, reject) => {
        api.get('/data').then((response, request) => {
            resolve([false, response.data])
        }).catch((err) => {
            if (err.response) {
                if (err.response.data.ValidationErrors) {
                    resolve([true, err.response.data.ValidationErrors[0].msg])
                } else {
                    resolve([true, err.response.statusText])
                }
            } else if (err.request) {
                resolve([true, 'Our server is currently offline'])
            } else {
                resolve([true, 'Unknown Error'])
            }
        })
    })
}

export function PostData(values) {
    return new Promise((resolve, reject) => {
        console.log('b')
        api.post('/data', values).then((response, request) => {
            resolve([false, response.data])
        }).catch((err) => {
            if (err.response) {
                if (err.response.data.ValidationErrors) {
                    console.log(err.response.data.ValidationErrors)
                    resolve([true, err.response.data.ValidationErrors[0].msg])
                } else {
                    resolve([true, err.response.statusText])
                }
            } else if (err.request) {
                resolve([true, 'Our server is currently offline'])
            } else {
                resolve([true, 'Unknown Error'])
            }
        })
    })
}