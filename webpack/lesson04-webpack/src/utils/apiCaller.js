import axios from 'axios';
import * as Config from './../contants/Config';

export default function callApi (endpoit, method='GET', body) {
    return axios({
            method: method,
            url: `${Config.API_URL}/${endpoit}`,
            data: body
        }).catch(err => {
            console.log(err);
        });
}