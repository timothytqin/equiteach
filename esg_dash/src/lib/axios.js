import axios from "axios";

const instance = axios.create({
	// baseURL: "http://192.168.137.75:8080",
	baseURL: "https://fh9lh7e7oi.execute-api.us-east-2.amazonaws.com/",
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.common["Content-Type"] = "application/json";
// instance.defaults.headers.common["Authentication"] = "Bearer JWT_TOKEN"

export default instance;
