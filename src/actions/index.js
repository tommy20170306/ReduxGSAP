import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

const URL = 'http://reduxblog.herokuapp.com/api/posts/';
const KEY = "?key=mysecret";

export function fetch_posts(){

	const request = axios.get(URL+KEY);

	return{
		type: FETCH_POSTS,
		payload: request
	}
}

export function create_post(data){
	const request = axios.post(URL+KEY, JSON.parse(data)).then((res) => {
		if(res.statusText==="Created")
			window.location.href = "/";
	}).catch((err) => {
		//console.log(err);
	});
}