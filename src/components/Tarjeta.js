import React, { Component } from 'react'
import axios from 'axios'

export default class Tarjeta extends Component {

    state = {
        numero: '',
        fecha: '',
        validacion: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get('http://localhost:4000/api/tarjeta/', {
            data: {
                numero: this.state.numero,
                fecha: this.state.fecha
            }  
        })
        this.setState({
            validacion: res.data.validacion
        })
        console.log(this.state.validacion);
    }

    render() {
        return (
            <div className="card align-self-center">
                <div className="card-header">
                    <h3>Validación de tarjeta</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit} className="mb-5">
                        <div className="col-md-7 form-floating mb-3">
                            <input type="number" className="form-control" onChange={this.onInputChange}
                                placeholder="Numero" name="numero" />
                            <label>Numero de tarjeta</label>
                        </div>
                        <div className="col-md-2 form-floating mb-3">
                            <input type="number" className="form-control" onChange={this.onInputChange}
                                placeholder="Participación" min="0" max="99" step="1" name="fecha" />
                            <label>Año de caducidad</label>
                        </div>
                        <button type="submit mb-3" className="bt btn-primary">
                            Validar
                        </button>
                    </form>
                    <div className="container mb-6">
                        <h3>{this.state.validacion}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
