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

function Greetings(props){
  return <h1>Hello, my name is {props.name}. I was born in {props.birth}</h1>
}

function AllGreetings(){
  return (
    <div>
      <Greetings name="Caio Henrique" birth="01/06/2006"/>
      <Greetings name="Kátia Almeida" birth="21/02/1973"/>
      <Greetings name="Ian Vitor" birth="28/01/2000"/>
    </div>
  )
}

const greet = <Greetings name="Caio Henrique" birth="01/06/2006"/>;

const image = <img src="favicon.ico"/>;

/*
class greetings extends React.Component {
  render(){
    <h1>Hello, my name is {props.name}</h1>
  }
}*/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "Caio Henrique"
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);