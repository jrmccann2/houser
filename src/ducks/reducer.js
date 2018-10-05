const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    image: '',
    mortgage: 0,
    rent: 0
}

const STEP_ONE = 'STEP_ONE';
const STEP_TWO = 'STEP_TWO';
const STEP_THREE = 'STEP_THREE';


export default function reducer (state = initialState, action){
    switch (action.type) {
        case STEP_ONE:
            return Object.assign( {}, state, {
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip
            } );

        case STEP_TWO:
            return Object.assign( {}, state, { image: action.payload} );

        case STEP_THREE:
            return Object.assign( {}, state, {
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
            } );

        default:
            return state;
    }
}

export function stepOne ( name, address, city, state, zip ) {
    return {
        type: STEP_ONE,
        payload: {
            name,
            address,
            city,
            state,
            zip
        }
    }
}

export function stepTwo ( image ) {
    return {
        type: STEP_TWO,
        payload: image
    }
}

export function stepThree ( mortgage, rent ) {
    return {
        type: STEP_THREE,
        payload: {
            mortgage,
            rent
        }
    }
}