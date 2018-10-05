import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

class StepTwo extends Component {
    constructor(props){
        super(props);

        this.state = {
            image: ''
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
                Image URL:
                <input type="text" placeholder="Image URL" name='image' onChange={this.handleInput} />
            </p>
            <Link to='/'><button className='btn'>Cancel</button></Link>
            <Link to='/wizard/stepThree'><button>Next Step</button></Link>
        </div>
        );
    }
}

export default StepTwo;