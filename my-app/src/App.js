import {Component} from 'react'

class App extends Component{
  state = {
    valor: 3
  }
  render(){
    console.log(this.state);
    return(
      <div>
        <p>Hola mundito</p>
        <button className={this.state.valor} onClick={() => this.setState({valor: 2})}>
          Enviar
        </button>
      </div>
    )
  }
}

/**
 * RENDER se ejecuta cuando:
 * 1. El estado del componente ha cambiado (Al hacer click)
 * 2. Cuando el metodo render de un componente padre se ha llamado
 * 
 * Actualizar con "setState" que viene de "Component"
 * 
 * Puede recuperarse sus valores
 * 
 * El estado se debe llamar siempre "state"
 * 
 * Si no se extiende a "Component" y es NECESARIO para usar el state
 */


export default App;
