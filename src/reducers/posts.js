export default (state = [], action) => {
    switch (action.type) {
        case "ADD_POST":
            return [...state, action.post]
        default:
            return state;
    }
}