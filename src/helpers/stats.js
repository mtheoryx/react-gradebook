const format = (n, p = 2) => n.toFixed(p);

export const min = data =>
    ( data && data.length )
        ? format(Math.min(...data))
        : format(0);

export const max = data =>
    (data && data.length)
        ? format(Math.max(...data))
        : format(0);

export const avg = data =>
    (data && data.length)
        ? format(
            data
                .reduce((m, k) => m + k, 0) / Object.keys(data).length || 0
        )
        : format(0);
