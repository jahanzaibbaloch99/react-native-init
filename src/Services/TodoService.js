import HttpClient from "./HttpClient";

class TodoService {

	static getAllTodos() {

		var url = "https://jsonplaceholder.typicode.com/todos";

		return HttpClient.get(url);

	}

}