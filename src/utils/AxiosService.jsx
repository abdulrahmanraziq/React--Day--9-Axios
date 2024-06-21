import axios from "axios";

const AxiosService = axios.create({
    baseURL: 'https://6637119b288fedf6937f52ed.mockapi.io',
    headers: {
        'Content-Type': 'application/json'
    }
  });


  export default AxiosService