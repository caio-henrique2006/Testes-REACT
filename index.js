import React from 'react';
import ReactDOM from 'react-dom';

const name = "Caio Henrique";

const element = (
	<h1>
	 Hello {name}
	</h1>
	); 

const elementFilho = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

const image = <img src="favicon.ico"/>;

/*
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
); // Os dois códigos são equivalentes, porém o segundo usa um Elemento REACT;

// Nota: esta estrutura está simplificada
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};*/ // O segundo é compilado neste último código;


ReactDOM.render(
	image,
	document.getElementById('root')
);