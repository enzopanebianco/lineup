import axios from "axios";

const api = axios.create({
    baseURL:'https://private-anon-bf9a962f3b-hub2bapi.apiary-mock.com/RestServiceImpl.svc/'

})

export default api;