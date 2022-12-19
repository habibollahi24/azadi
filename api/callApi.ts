import axios from "axios"
import { ValidationsErrorFields } from './../utils/validationErrors';


const callApi = () => {
 const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api"
 })

 axiosInstance.interceptors.request.use(
  config => config,
  err => Promise.reject(err)
 )

 axiosInstance.interceptors.response.use(
  (res) => res
  ,
  err => {
   //handle all 422 errors
   if (err.response.status === 422) {
    throw new ValidationsErrorFields(err.response.data.errors)
   }
   return Promise.reject(err)
  }
 )

 return axiosInstance

}

export default callApi