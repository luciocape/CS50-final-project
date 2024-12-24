// import axios from 'axios'
// // const Http = new XMLHttpRequest()
// // const base_url = 'http://localhost:8000/lambda/'
// export async function checkToken(access_token) {
//     return axios
//         .get('', {
//             headers: {
//                 Authorization: 'Bearer ' + access_token
//             }
//         })
//         .then(response => {
//             console.log('Token chequeado:', response.data)
//             return true
//         })
//         .catch(error => {
//             console.error('Error al crear el recurso: ', error)
//             return false
//         })
// }
// export async function refreshToken(refresh_token) {
//     return axios
//         .get('')
//         .then(response => {
//             console.log('Recurso creado con éxito:', response.data)
//             localStorage.setItem('access_token', response.data['access_token'])
//             // localStorage.setItem('token_type', response.data['token_type'])
//             return true
//         })
//         .catch(error => {
//             console.error('Error al crear el recurso: ', error)
//             return false
//         })
// }

// export async function getData(dataName, teamId) {
//     const token = localStorage.getItem('access_token')
//     // switch (dataName) {
//     //     case 'recetas':
//     // }
// }

// export async function postData(dataName, data, teamId = '0') {
//     const token = localStorage.getItem('access_token')
//     const headers = {
//         Authorization: `Bearer ${token}`
//     }
//     // switch (dataName) {
//     //     case 'recetas':
//     // }
// }

// export async function patchData(dataName, dataId, data) {
//     const access_token = localStorage.getItem('access_token')
//     // switch (dataName) {
//     //     case 'recetas'
//     // }
// }
