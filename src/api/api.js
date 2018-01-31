import axios from 'axios'

export const IP = 'http://192.168.50.199:1010'

export const postTest = params => {return axios.post(IP +'/department/findOne',params);};
export const getTest = params => {return axios.get(IP + '/department/findAll',params);};
