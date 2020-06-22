import moment from 'moment';


//getVisiable

const getVisiableCases = (cases, {startDate, endDate} ) => {
    return cases.filter( (item) => {

        const createMoment = moment(item.createAt);
        const startDateMatch = startDate? startDate.isSameOrBefore(createMoment, 'day'): true;
        const endDateMatch = startDate? endDate.isSameOrAfter(createMoment, 'day'): true;

        return startDateMatch&&endDateMatch;

    }).sort((a,b) => {

        return a.createAt < b.createAt ? 1:-1;
    }
    );
}

export default getVisiableCases;