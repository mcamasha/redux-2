import React from 'react';
import Form from '../containers/form';
import Films from '../containers/films';


const WebPage = () => (
    <div>
        <h3>Введите название фильма:</h3>
        <Form/>
        <hr/>
        <h4>В хранилище: </h4>
        <Films/>
    </div>
);

export default WebPage;