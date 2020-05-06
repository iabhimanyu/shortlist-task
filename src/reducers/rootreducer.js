//Dummy default data for the app in redux store

const initialState = {
    tasks: [
        {
            id: 1,
            sql: ""
        },
        {
            id: 2,
            sql: ""
        },
        {
            id: 3,
            sql: ""
        },
        {
            id: 4,
            sql: ""
        }
    ],
    userName: "Rupesh Mishra"
};

//Redux root reducer
const rootReducer = (state = initialState, action) => {
    return state;
};

export default rootReducer;
