

export const setStartDate = (date=undefined) => (
    {
        type: 'SET_STARTDATE',
        date
    }
)

export const setEndDate = (date=undefined) => (
    {
        type: 'SET_ENDDATE',
        date
    }
)