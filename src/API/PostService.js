import axios from "axios";


export default class PostService {
	
	getAll2 = function(limit=10 , page=1){
		let f =  async function(){
			const response = await  axios.get('https://jsonplaceholder.typicode.com/posts' , {
				params: {
					_limit: limit,
					_page: page
				}
			});
			return response
		}
		return f();
	}

	static async getById(id) {
		
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
		return response;
	}

}
