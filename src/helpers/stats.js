export const min = data =>
    ( data && data.length )
        ? Math.min(...data)
        : 0;

export const max = data =>
    (data && data.length)
        ? Math.max(...data)
        : 0;

export const avg = data =>
    data
        .reduce((m,k) => m + k, 0) / Object.keys(data).length || 0;
