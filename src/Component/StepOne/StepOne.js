import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

class StepOne extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        
        return (
        <div className="Wizard">
            <p>
                Name:
                <input type="text" placeholder="Name" name='name' onChange={this.handleInput} />
            </p>
            <p>
                Address:
                <input type="text" placeholder="Address" name='address' onChange={this.handleInput} />
            </p>
            <p>
                City:
                <input type="text" placeholder="City" name='city' onChange={this.handleInput} />
            </p>
            <p>
                State:
                <input type="text" placeholder="State" name='state' onChange={this.handleInput} />
            </p>
            <p>
                ZIP:
                <input type="text" placeholder="ZIP" name='zip' onChange={this.handleInput} />
            </p>
            <Link to='/'><button className='btn'>Cancel</button></Link>
            <Link to='/wizard/stepTwo'><button>Next Step</button></Link>
        </div>
        );
    }
}

export default StepOne;