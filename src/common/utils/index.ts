export const jsonToQueryParams = (params: any) => {
    let queryParams = '';
    if (params) {
        queryParams = Object.keys(params)
            .map(key => key + '=' + params[key])
            .join('&');
        if (queryParams.length > 0) {
            queryParams = '?' + queryParams;
        }
    }
    return queryParams;
};