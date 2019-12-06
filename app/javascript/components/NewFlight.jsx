import React from 'react';
import { Link } from 'react-router-dom';

class NewFlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departure_id: "",
            arrrival_id: "",
            date: "",
            fleet_id: "",


        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    stripHtmlEntities(str) {
        return String(str)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();
        const url = '/api/v1/flights/create';
        const { departure_id, arrrival_id, date, fleet_id } = this.state;

        if (departure_id.length == 0 || arrrival_id.length == 0 || date.length == 0 || fleet_id.length == 0)
        return;

        const body = {
            departure_id,
            arrrival_id,
            date,
            fleet_id
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
                console.log("responseOK");
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
                            Create a Flight

                        </h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="departureId"> Departure ID </label>
                                <input 
                                type="text"
                                name='departureId'
                                id='dep-id'
                                required
                                onChange={this.onChange}
                                />
                              
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Arrival ID</label>
                                <input type="text"
                                required
                                onChange={this.onChange}/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Date</label>
                                <input type="text"
                                required
                                onChange={this.onChange}/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Fleet ID</label>
                                <input type="text"
                                required
                                onChange={this.onChange}/>
                                
                            </div>

                            <button type="submit" className="btn custom-button mt-3">
                                Create Flight
                            </button>

                        </form>


                    </div>

                </div>

            </div>
        )
    }
}

export default NewFlight;