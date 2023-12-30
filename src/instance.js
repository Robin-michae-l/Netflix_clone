import axios from "axios";

const instance=axios.create({             //syntax for creating axios instance 
    baseURL:'https://api.themoviedb.org/3'
})
export default instance; //exporing instance in order to access it in row