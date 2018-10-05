import React, { Component } from 'react';
import axios from 'axios';
import House from '../House/House';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses: []
        }
    }

    getAll(){

    }

    deleteHouse(){

    }

    render() {
        return (
            <div className='Dashboard'>
                Dashboard
                <Link to='/wizard'><button className='btn'>Add New Property</button></Link>
                <House />
            </div>
        );
    }
}

export default Dashboard;