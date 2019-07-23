import moment from "moment";
import { dates } from "../utilities/utilites";

export default (posts, { text, dateFilter }) => {
    if (!posts) {
        return null
    } else {
        return posts
            .filter(post => {
                let fromDate, toDate;
                if (dateFilter) {
                    const { month, year } = dateFilter;
                    fromDate = dates[year][month][0];
                    toDate = dates[year][month][1];
                }

                const date = post.createdAt * 1000;
                const textMatch = post.title
                    .toLowerCase()
                    .includes(text.toLowerCase());


                const monthMatch = dateFilter
                    ? moment(date).isBetween(fromDate, toDate)
                    : true;
                return textMatch && monthMatch;
            });
    }
};