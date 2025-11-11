//
const consult = '{ helloWorld }';

// Função para criar o elemento no DOM
const createHelloWorld = (string) => {
	const body = document.querySelector('body');

	body.innerHTML = string;
};

// Configurações da requisição fetch
const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/JSON',
	},
	body: JSON.stringify({
		query: consult,
	}),
};

// Realiza a consulta GraphQL ao servidor
fetch('http://localhost:4000/graphql', options)
	.then((res) => res.json())
	.then((content) => createHelloWorld(content.data.helloWorld));
