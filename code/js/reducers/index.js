import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';

const allReducers = combineReducers ({
    cars: CarsReducers, //request: RequestReducers
    //films: FilmsReducers
    active: ActiveCar
});

export default allReducers;