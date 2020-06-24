import axios from 'axios';

export default {
    $getJson(fileLocation) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: fileLocation,
                dataType: "json",
                crossDomain: true,
                cache: false
            }).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    }
}