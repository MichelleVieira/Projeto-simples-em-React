import React, { Component } from 'react'

function mensagemIMC(result) {

    if (result < 18) {
        return "Você está abaixo do peso"
    }
    else if (result < 24) {
        return "Você está no peso normal"
    }
    else if (result < 30) {
        return "Você está acima do peso"
    }
    else if (result >= 30) {
        return "Tome cuidado! Você está obeso"
    }

}

export class Imc extends Component {

    constructor(props) {
        super(props)
        this.state = {
            peso: 0,
            altura: 0,
            valor: ""
        }
        this.handlePeso = this.handlePeso.bind(this);
        this.handleAltura = this.handleAltura.bind(this);
        this.handleCalculoImc = this.handleCalculoImc.bind(this);
    }

    handlePeso(event) {
        this.setState({ peso: event.target.value })


    }

    handleAltura(event) {
        this.setState({ altura: event.target.value })

    }

    handleCalculoImc() {
        const { peso, altura } = this.state;

        let valor = peso / (altura * altura);

        this.setState({ valor });
    }


    render() {
        const valor = this.state.valor;
        const result = Number.isNaN(parseFloat(valor)) ? '0' : valor;
        const mensagemImc = mensagemIMC(result)
        return (
            <div className='calculo'>
                <label htmlFor='peso'>
                    <span className='label'>Peso:</span>
                    <br />
                    <br />
                    <input autoFocus type='text' onChange={this.handlePeso} id='peso' placeholder='00' />
                </label>
                <br />
                <br />
                <label htmlFor='altura'>
                    <span className='label'>Altura:</span>
                    <br />
                    <br />
                    <input autoFocus type='text' onChange={this.handleAltura} id='altura' placeholder='0.00' />
                </label>
                <br />
                <br />
                <button onClick={this.handleCalculoImc}>Calcular IMC</button>
                {valor > 0 &&
                    <p className='textInfomation'>IMC: {parseFloat(result).toFixed(2)}</p>
                }
                {
                    result > 0 &&
                    <p className='textInfomation'>{mensagemImc}</p>
                }
            </div>
        )
    }
}