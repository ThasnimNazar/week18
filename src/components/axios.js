import axios from 'axios';
import {baseUrl} from '../constants/Constants'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  });

export default instance