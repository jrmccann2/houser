import React from 'react';


export default function House (props) {
    return (
      <div className="House">
        <p>Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>ZIP: {props.zip}</p>
        <button onClick={ () => props.deleteBtn(props.id)}>Delete</button>
      </div>
    );
}