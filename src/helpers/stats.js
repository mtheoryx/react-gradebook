export const min = data =>
    (Math.min(...data) === Infinity)
        ? 0
        : Math.min(...data);

export const max = data =>
    data
        .reduce((m, k) => m > k ? m : k, 0);

export const avg = data =>
        data
            .reduce((m,k) => m + k, 0) / Object.keys(data).length || 0;
