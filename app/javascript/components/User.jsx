import React from 'react';
import { Link } from 'react-router-dom';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: "",
            destination: "",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();
        const url = '/api/v1/flights?dep=MEL&arr=SYD';
        const { origin, destination } = this.state;

        

        const body = {
           origin,
           destination,
        };
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                 "Content-Type": "application/json"
            },
            body: JSON.stringify(body)

        })
        .then(response => {
            if (response.ok) {
                console.log(response);
                return response.json();
            }
            throw new Error("Network issues AGAIN!!");
        } )
        .then(response => this.props.history.push(`/flight/${response.id}`))
        .catch(error => console.log(error.message));

    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 offset-lg-3">
                        <h1 className="font-weight-normal mb-5">
                            Search a Flight

                        </h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="departureId"> Origin </label>
                                <input 
                                type="text"
                                name='departureId'
                                id='dep-id'
                                required
                                onChange={this.onChange}
                                />
                              
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Destination</label>
                                <input type="text"
                                required
                                onChange={this.onChange}/>
                                
                            </div>
                            

                            <button type="submit" className="btn custom-button mt-3">
                                Search
                            </button>

                        </form>


                    </div>

                </div>

            </div>
        )
    }
}

export default User;