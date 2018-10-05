import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleInput(){

    }

    postHouse(){

    }

    render() {
        
        return (
        <div className="Wizard">
            Wizard
            <Link to='/'><button className='btn'>Cancel</button></Link>
        </div>
        );
    }
}

export default Wizard;