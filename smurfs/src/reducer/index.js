import {}


export const initialState = {
    smurfs: [{
            name: 'dudley',
            age: '100',
            height: '4.5cm',
            id: '1'
        }

    ]
}



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SMURF':
            return {
                ...state,
                smurfs: [...state.smurfs,
                    {
                        name: action.payload.name,
                        age: action.payload.age,
                        height: action.payload.height,
                        id: Date.now()
                    }
                ]
            };
        default:
            return state;
    };
};