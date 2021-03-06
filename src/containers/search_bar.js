import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fectchWeather, resetWeather } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        //We need to go and fetch weather data
        this.props.fectchWeather(this.state.term);
        this.setState({term: ''});
    }

    onReset(event) {
        event.preventDefault();
        this.props.resetWeather();
        this.setState({term: ''});
    }

    render() {
        return (
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                    placeholder="Get a five-day forcast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}     
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="submit">Submit</button>
                        <button className="btn btn-secondary"
                            onClick={this.onReset}
                        >Reset</button>
                    </span>
                </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fectchWeather, resetWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);