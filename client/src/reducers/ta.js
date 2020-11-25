export default (ta=[], action) => {

    switch(action.type){

        case 'ADD_ACCEPTED_DOUBTS':
            return ta.map((t) => t._id === action.payload._id ? action.payload : t);
        case 'ADD_ESCALATED_DOUBTS':
            return ta.map((t) => t._id === action.payload._id ? action.payload : t);
        case 'ADD_RESOLVED_DOUBTS':
            return ta.map((t) => t._id === action.payload._id ? action.payload : t);
        case 'FETCH_ALL_TA':
            return action.payload;
        case 'CREATE_TA':
            return [...ta, action.payload];
        default:
            return ta;
    }
}