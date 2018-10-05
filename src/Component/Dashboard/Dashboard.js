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
        this.getHouses = this.getHouses.bind(this)
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    getHouses(){
        axios.get('/api/houses')
        .then( (res) => {
          this.setState({houses: res.data})
        })
    }

    componentDidMount(){
        this.getHouses();
    }

    deleteHouse(id){
        console.log(id)
        axios.delete(`/api/deleteHouse/${id}`)
            .then( () => {
                this.getHouses()
            });
    }

    render() {

        let houses = this.state.houses.map( (house, i) => {
            return (
                <div className="house-display" key={i}>
                    <House 
                    id={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                    deleteBtn={this.deleteHouse}
                    />
                </div>
            )
          })

        return (
            <div className='Dashboard'>
                Dashboard
                <Link to='/wizard/stepOne'><button className='btn'>Add New Property</button></Link>
                <House />
                {houses}
            </div>
        );
    }
}

export default Dashboard;