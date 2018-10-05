import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { connect } from 'react-redux';

class StepThree extends Component {
    constructor(props){
        super(props);

        this.state = {
            mortgage: 0,
            rent: 0
        }
        this.handleInput = this.handleInput.bind(this)
        this.createHouse = this.createHouse.bind(this)
    }

    handleInput(event){
        this.setState({[event.target.name]: event.target.value})
    }

    createHouse(){
        let {name, address, city, state, zip} = this.state
        axios.post('/api/createHouse', {name, address, city, state, zip})
            .then()
    }

    render() {
        
        return (
        <div className="Wizard">
            <p>
                Mortgage:
                <input type="number" placeholder="Mortgage" name='mortgage' onChange={this.handleInput} />
            </p>
            <p>
                Rent:
                <input type="number" placeholder="Mortgage" name='rent' onChange={this.handleInput} />
            </p>
            <Link to='/'><button className='btn' onClick={this.createHouse}>Complete</button></Link>
            <Link to='/'><button className='btn'>Cancel</button></Link>
            <Link to='/wizard/stepTwo'><button>Previous Step</button></Link>
        </div>
        );
    }
}

export default StepThree;