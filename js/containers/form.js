import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { click } from '../actions/click';
import axios from 'axios';

const API_KEY = '37662c76ffc19e5cd1b95f37d77155fc';

const Option = ({value: {title}}) => {
    return (
        <div><a href="#">{title}</a></div>
    );
}

class Form extends Component { 

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            input: '',
            films: []
        };
    }

    handleChange(e) {
        let foundOptions = [];
        const value = e.target.value.toLowerCase();
        const self = this;
        if (value !== '') {
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=popularity.desc&page=1`)
                .then((response) => {
                    response.data.results.forEach(function (item) {
                        if (item.title.toLowerCase().search(value.toLowerCase()) !== -1) {
                            const element = <Option value={item} key={item.id}/>;
                            foundOptions.push(element);
                        }
                        self.setState({
                            films: foundOptions,
                            input: value
                        });
                    });
                })
                .catch((error) => {
                    console.log('Ошибка: ' + error.message);
                });
        } else {
            this.setState({
                input: value,
                films: []
            });
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
                <button onClick={() => this.props.click(this.state.films)}>Click</button>
                <div> {this.state.films} </div>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        click: click
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(Form);