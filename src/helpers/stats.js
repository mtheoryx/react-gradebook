export const min = data => {
    return Object
                .keys(data)
                .map(key => data[key].grade)
                .reduce((m,k) => {
                    return m < k ? m : k}
                , 0);
};

export const max = data => {
    return Object
                .keys(data)
                .map(key => data[key].grade)
                .reduce((m,k) => {
                    return m > k ? m : k
                }, 0);
};

export const avg = data => {

};
