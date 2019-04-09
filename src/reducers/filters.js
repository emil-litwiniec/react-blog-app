
const filtersReducerDefaultState = {
    text: ""
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };

        case "SET_DATE_FILTER":
            return {
                ...state,
                dateFilter: action.dateFilter
            }
        default:
            return state;
    }
}
