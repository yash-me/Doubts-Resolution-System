import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const addComment = (id,comment) => axios.patch(`${url}/${id}/addComment`, comment);
export const addAnswer = (id,answer) => axios.patch(`${url}/${id}/addAnswer`, answer);
/////////////////////////////////////////////////////////
/////////////////////  TA  //////////////////////////////
/////////////////////////////////////////////////////////
export const fetchTaData = () => axios.get(`${url}/ta`);
export const createTaData = (data) => axios.post(`${url}/ta`, data);
export const addAcceptedDoubts = (id) => axios.patch(`${url}/${id}/addAcceptedDoubts`);
export const addEscalatedDoubts = (id) => axios.patch(`${url}/${id}/addEscalatedDoubts`);
export const addResolvedDoubts = (id) => axios.patch(`${url}/${id}/addResolvedDoubts`);