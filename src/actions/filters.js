import database from "../firebase/firebase";

export const setTextFilter = (text) => ({
    type: "SET_TEXT_FILTER",
    text
});


export const setDateFilter = (dateFilter) => ({
    type: "SET_DATE_FILTER",
    dateFilter
}
)
