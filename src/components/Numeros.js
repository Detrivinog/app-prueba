import React, { Component } from 'react'
import axios from 'axios'

export default class Numeros extends Component {

    state = {
        numero: '',
        encontrados: []
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get('http://localhost:4000/api/numeros/', {
            data: {
                numero: this.state.numero,
            }  
        })
        this.setState({
            encontrados: res.data
        })
        console.log(res);
    }

    render() {
        return (
            <div className="card align-self-center">
                <div className="card-header">
                    <h3>Numeros perfectos</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit} className="mb-5">
                        <div className="col-md-7 form-floating mb-3">
                            <input type="number" className="form-control" onChange={this.onInputChange}
                                placeholder="Numero" name="numero" />
                            <label>Cuantos números</label>
                        </div>
                        <button type="submit mb-3" className="bt btn-primary">
                            Encontrar
                        </button>
                    </form>
                    <div className="container mb-6">
                        <h3>{this.state.encontrados}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
