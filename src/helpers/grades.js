export const getGradesFromObject = object =>
    (Object.keys(object).length === 0)
        ? []
        : Object
            .keys(object)
            .map(key => object[key].grade);
