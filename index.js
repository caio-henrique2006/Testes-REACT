// Usar no cmd para criar um novo app REACT:
// npx create-react-app my-app

// Inicia a execução do programa:
// npm start

// Não esquecer de importar a biblioteca REACT:
import React from 'react';
import ReactDOM from 'react-dom';
/*
// Uso do ReactDOM.render(); para renderizar o app no html:

ReactDOM.render(
  conteúdo a ser renderizado
  document.getElementById("root") // chamando tag html;
);

*/

// Usando JSX:
const name = "Caio";
const text = <h1>Olá {name}</h1> // Com {} é possível guardar qualquer expressão JS;

// Use () para quebrar as linhas:

// Uma tag HTML vazia pode ser fechada com < />:
const image = <img src="URL"/>

//****************************************************************************
// Elementos REACT:
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
/*
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
}; // O segundo é compilado neste último código;
*/
//**************************************************************************

// Criando um componente função que recebe um prop e retorna o que deve ser renderizado;
function Welcome(props){
  return <h1>Hello, I'm {props.name}</h1>
}
// Instanciando um componente para uma váriavel
const hello = <Welcome name="Caio Henrique"/>

// Criando um componente que chama outro componente várias vezes;
function AllGreetings(){
  return (
    <div>
      <Welcome name="Caio Henrique"/>
      <Welcome name="Kátia Almeida"/>
      <Welcome name="Ian Vitor"/>
    </div>
  )
}

//*************************************************************************

// Criando um componente classe colocando um constructor e declarando states:
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Caio Henrique"
    };
  }
render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
      </div>
    );
  }
}

// função especial do React que executa após a renderização:
/*
componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
*/
// Função especial do React que executa após a classe em que foi declarado for destruída:
/*
componentWillUnmount() {
    clearInterval(this.timerID);
  }
*/
// Para chamar algum state dentro da classe se usa a seguinte sintaxe:
/*
this.state.atribute
*/
// Use setState() para modificar a informação nos states:
/*
setState(this.state.name);
*/

//************************************************************
// Eventos em React são declarados com camelCase:
/*
<button onClick={some_component}>
  press
</button>
*/

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    // Utilize .bind para possibilitar o uso do this. de eventos dentro de classes:
    this.handleClick = this.handleClick.bind(this);
  }
}
//**************************************************************
// Usando props:
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

//*********************************************************************************************
// Usando forms em react:
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Usando argumento event em handle[event];
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
// Usando <select>:
class Select extends React.Component {
  render() {
  return(
      <select>
        <option value="laranja">Laranja</option>
        <option value="limao">Limão</option>
        <option value="coco">Coco</option>
        <option value="manga">Manga</option>
      </select>
    )
  }
}
//**********************************************************************************************************
// Elevando o state:
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
//*******************************************************************************************
// Composição:

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      Heyyyyyyyyyyy
      {props.children}
    </div>
  );
}

function WelcomeDialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

/*
ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <WelcomeDialog/>,
  document.getElementById('root')
);

