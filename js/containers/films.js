import React, { Component } from 'react';
import { connect } from 'react-redux';

class Films extends Component {

    showlist() {
        return this.props.films.map((film) => {
            return (
                <p key={film.props.value.id}>{film.props.value.title}</p>
            );
        });
    }

    render() {
        if (!this.props.films || !this.props.films.length) {
            return (<p>Фильмов не найдено</p>);
        }
        return (
            <div>
                {this.showlist()}
            </div>
        );
    }
}

function mapStateToProps(state) {  
    return {
        films: state.sendRequest[state.sendRequest.length - 1]
    };
}

export default connect(mapStateToProps)(Films);