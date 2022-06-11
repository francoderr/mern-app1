import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost)

//axios is used to make api calls
//the url point to the backend route
//the axios.get call returns all the posts in the database