import React, { Component } from 'react';
import { connect } from 'react-redux';

class Films extends Component {

    showlist() {
        return this.props.films.map((film) => {
            return (
                <p>{film.props.value}</p>
            );
        });
    }

    render() {
        if (!this.props.films || !this.props.films.length) {
            return (<p>Фильмов не найдено</p>);
        }
        return (
            <div>
                <p>{this.showlist()}</p>
            </div>
        );
    }
}

function mapStateToProps(state) { //чтобы можно было брать из хранилища 
    return {
        films: state.sendRequest[state.sendRequest.length - 1]
    };
}

export default connect(mapStateToProps)(Films);