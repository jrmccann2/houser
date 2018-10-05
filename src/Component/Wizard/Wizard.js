import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';

class Wizard extends Component {

    render() {
        
        return (
        <div className="Wizard">
            <Switch>
                <Route path='/wizard/stepOne' component={StepOne} />
                <Route path='/wizard/stepTwo' component={StepTwo} />
                <Route path='/wizard/stepThree' component={StepThree} />
            </Switch>
            <Link to='/'><button className='btn'>Cancel</button></Link>
        </div>
        );
    }
}

export default Wizard;