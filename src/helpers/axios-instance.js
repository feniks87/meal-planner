import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://meal-planner-ebf98.firebaseio.com/'
});

export default instance;