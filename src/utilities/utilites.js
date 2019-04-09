import moment from "moment";

export const giveArrayOfMonths = (posts) => {
    let auxiliaryArray = [];
    let arrayOfMonths = [];
    posts.forEach(post => {
        const date = post.createdAt * 1000;
        const momentDate = moment(date).format('MMMM,YYYY');
        // const year = moment(date).format('YYYY')
        // const arr = [month, year];

        if (!auxiliaryArray.includes(momentDate)) {

            auxiliaryArray.push(momentDate);
        } else {
            return
        }

    })

    auxiliaryArray.forEach(date => {
        let dateArr = date.split(',')
        arrayOfMonths.push([dateArr[0], dateArr[1]])
    })

    return arrayOfMonths;

};


export const dates = {
    2020: {
        "January": [moment('2020-01-01').startOf("month").format('YYYY-MM-DD'), moment('2020-01-01').endOf("month").format('YYYY-MM-DD')],
        "February": [moment('2020-02-01').startOf("month").format('YYYY-MM-DD'), moment('2020-02-01').endOf("month").format('YYYY-MM-DD')],
        "March": [moment('2020-03-01').startOf("month").format('YYYY-MM-DD'), moment('2020-03-01').endOf("month").format('YYYY-MM-DD')],
        "April": [moment('2020-04-01').startOf("month").format('YYYY-MM-DD'), moment('2020-04-01').endOf("month").format('YYYY-MM-DD')],
        "May": [moment('2020-05-01').startOf("month").format('YYYY-MM-DD'), moment('2020-05-01').endOf("month").format('YYYY-MM-DD')],
        "June": [moment('2020-06-01').startOf("month").format('YYYY-MM-DD'), moment('2020-06-01').endOf("month").format('YYYY-MM-DD')],
        "July": [moment('2020-07-01').startOf("month").format('YYYY-MM-DD'), moment('2020-07-01').endOf("month").format('YYYY-MM-DD')],
        "August": [moment('2020-08-01').startOf("month").format('YYYY-MM-DD'), moment('2020-08-01').endOf("month").format('YYYY-MM-DD')],
        "September": [moment('2020-09-01').startOf("month").format('YYYY-MM-DD'), moment('2020-09-01').endOf("month").format('YYYY-MM-DD')],
        "October": [moment('2020-10-01').startOf("month").format('YYYY-MM-DD'), moment('2020-10-01').endOf("month").format('YYYY-MM-DD')],
        "November": [moment('2020-11-01').startOf("month").format('YYYY-MM-DD'), moment('2020-11-01').endOf("month").format('YYYY-MM-DD')],
        "December": [moment('2020-12-01').startOf("month").format('YYYY-MM-DD'), moment('2020-12-01').endOf("month").format('YYYY-MM-DD')],
    },
    2019: {
        "January": [moment('2019-01-01').startOf("month").format('YYYY-MM-DD'), moment('2019-01-01').endOf("month").format('YYYY-MM-DD')],
        "February": [moment('2019-02-01').startOf("month").format('YYYY-MM-DD'), moment('2019-02-01').endOf("month").format('YYYY-MM-DD')],
        "March": [moment('2019-03-01').startOf("month").format('YYYY-MM-DD'), moment('2019-03-01').endOf("month").format('YYYY-MM-DD')],
        "April": [moment('2019-04-01').startOf("month").format('YYYY-MM-DD'), moment('2019-04-01').endOf("month").format('YYYY-MM-DD')],
        "May": [moment('2019-05-01').startOf("month").format('YYYY-MM-DD'), moment('2019-05-01').endOf("month").format('YYYY-MM-DD')],
        "June": [moment('2019-06-01').startOf("month").format('YYYY-MM-DD'), moment('2019-06-01').endOf("month").format('YYYY-MM-DD')],
        "July": [moment('2019-07-01').startOf("month").format('YYYY-MM-DD'), moment('2019-07-01').endOf("month").format('YYYY-MM-DD')],
        "August": [moment('2019-08-01').startOf("month").format('YYYY-MM-DD'), moment('2019-08-01').endOf("month").format('YYYY-MM-DD')],
        "September": [moment('2019-09-01').startOf("month").format('YYYY-MM-DD'), moment('2019-09-01').endOf("month").format('YYYY-MM-DD')],
        "October": [moment('2019-10-01').startOf("month").format('YYYY-MM-DD'), moment('2019-10-01').endOf("month").format('YYYY-MM-DD')],
        "November": [moment('2019-11-01').startOf("month").format('YYYY-MM-DD'), moment('2019-11-01').endOf("month").format('YYYY-MM-DD')],
        "December": [moment('2019-12-01').startOf("month").format('YYYY-MM-DD'), moment('2019-12-01').endOf("month").format('YYYY-MM-DD')],
    },
    2018: {
        "January": [moment('2018-01-01').startOf("month").format('YYYY-MM-DD'), moment('2018-01-01').endOf("month").format('YYYY-MM-DD')],
        "February": [moment('2018-02-01').startOf("month").format('YYYY-MM-DD'), moment('2018-02-01').endOf("month").format('YYYY-MM-DD')],
        "March": [moment('2018-03-01').startOf("month").format('YYYY-MM-DD'), moment('2018-03-01').endOf("month").format('YYYY-MM-DD')],
        "April": [moment('2018-04-01').startOf("month").format('YYYY-MM-DD'), moment('2018-04-01').endOf("month").format('YYYY-MM-DD')],
        "May": [moment('2018-05-01').startOf("month").format('YYYY-MM-DD'), moment('2018-05-01').endOf("month").format('YYYY-MM-DD')],
        "June": [moment('2018-06-01').startOf("month").format('YYYY-MM-DD'), moment('2018-06-01').endOf("month").format('YYYY-MM-DD')],
        "July": [moment('2018-07-01').startOf("month").format('YYYY-MM-DD'), moment('2018-07-01').endOf("month").format('YYYY-MM-DD')],
        "August": [moment('2018-08-01').startOf("month").format('YYYY-MM-DD'), moment('2018-08-01').endOf("month").format('YYYY-MM-DD')],
        "September": [moment('2018-09-01').startOf("month").format('YYYY-MM-DD'), moment('2018-09-01').endOf("month").format('YYYY-MM-DD')],
        "October": [moment('2018-10-01').startOf("month").format('YYYY-MM-DD'), moment('2018-10-01').endOf("month").format('YYYY-MM-DD')],
        "November": [moment('2018-11-01').startOf("month").format('YYYY-MM-DD'), moment('2018-11-01').endOf("month").format('YYYY-MM-DD')],
        "December": [moment('2018-12-01').startOf("month").format('YYYY-MM-DD'), moment('2018-12-01').endOf("month").format('YYYY-MM-DD')],
    },

}

console.log(dates[2019]["November"]);