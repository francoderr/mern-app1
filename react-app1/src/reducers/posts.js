/* eslint-disable import/no-anonymous-default-export */
// a reducer is a function that accepts state and action and does something on the state based o the action
// the state in this app is posts

export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];

        default: 
            return posts;
    }       
}