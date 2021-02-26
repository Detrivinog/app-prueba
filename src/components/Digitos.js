import React, { Component } from 'react'
import axios from 'axios'

export default class Digitos extends Component {

    state = {
        numero: '',
        pares: ''
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get('http://localhost:4000/api/digitos/', {
            data: {
                numero: this.state.numero,
            }  
        })
        this.setState({
            pares: res.data.pares
        })
        console.log(res, this.state.pares);
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="card align-self-center">
                <div className="card-header">
                    <h3>Digitos pares</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit} className="mb-5">
                        <div className="col-md-7 form-floating mb-3">
                            <input type="number" className="form-control" onChange={this.onInputChange}
                                placeholder="Numero" name="numero" max="99999" />
                            <label>Numero</label>
                        </div>
                        <button type="submit mb-3" className="bt btn-primary">
                            Encontrar
                        </button>
                    </form>
                    <div className="container mb-6">
                        <h3>{this.state.pares}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
