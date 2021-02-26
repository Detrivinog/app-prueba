import React, { Component } from 'react'
import axios from 'axios'

export default class Empleados extends Component {

    state = {
        empleados: [],
        empleado: '',
        departamento: '',
        salario: '',
        participacion: ''
    }

    async componentDidMount() {
        this.getEmpleados();
    }

    getEmpleados = async () => {
        const res = await axios.get('http://localhost:4000/api/empleados');
        this.setState({empleados: res.data});
        console.log(res.data)
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/empleados', {
            empleado: this.state.empleado,
            departamento: this.state.departamento,
            salario: this.state.salario,
            participacion: this.state.participacion
        })
        this.setState({empleado: ''})
        this.getEmpleados();
    }

    render() {
        return (
            <div className="row">
                <div className="card align-self-center col-md-4">
                    <div className="card-header">
                        <h3>Registrar empleado</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" onChange={this.onInputChange} 
                                    placeholder="Nombre"/>
                                <label>Nombre del Empleado</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" onChange={this.onInputChange} 
                                    placeholder="Sistemas"/>
                                <label>Departamento</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" onChange={this.onInputChange} 
                                    placeholder="Salario" min="1000" max="10000" step="200"/>
                                <label>Salario</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" onChange={this.onInputChange} 
                                    placeholder="Participación" min="0" max="100" step="5"/>
                                <label>Participación</label>
                            </div>
                            <button type="submit mb-3" className="bt btn-primary">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.empleados.map(empleado => (
                                <li className="list-group-item list-group-item-action" key={empleado._id}>
                                    {empleado.empleado}
                                </li> ))
                        }
                    </ul>

                </div>
            </div>
        )
    }
}
