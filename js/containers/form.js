import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showFilms } from '../actions/showFilms';
import axios from 'axios';

const API_KEY = '37662c76ffc19e5cd1b95f37d77155fc';

const Option = ({ value: { title } }) => {
    return (
        <div><a href="#">{title}</a></div>
    );
}

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            films: [],
            isLoading: false
        };
    }

    handleChange(e) {
        let filmsFound = [];
        const inputTitle = e.target.value;
        this.setState({
            isLoading: true
        })
        if (inputTitle !== '') {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&page=1&include_adult=false&query=${inputTitle}`)
                .then((response) => {
                    filmsFound = response.data.results
                        .filter((film) => {
                            return film.title.toLowerCase().search(inputTitle.toLowerCase()) !== -1
                        })
                        .map((film) => {
                            return <Option value={film} key={film.id} />;
                        });
                    this.setState({
                        films: filmsFound,
                        input: inputTitle,
                        isLoading: false
                    });
                })
                .catch((error) => {
                    console.log('Ошибка: ' + error.message);
                });
        } else {
            this.setState({
                input: inputTitle,
                films: filmsFound,
                isLoading: false
            });
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={(e) => this.handleChange(e)} />
                <button onClick={() => this.props.showFilms(this.state.films)}>Click</button>
                <div> {this.state.isLoading ? "Идет загрузка..." : this.state.films} </div>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showFilms: showFilms
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(Form);