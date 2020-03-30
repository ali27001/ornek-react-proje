export const BACKEND =
    process.env.NODE_ENV === 'production' ?
        process.env[`${process.env.TENANT}_API_URL`] :
        process.env.REACT_API_URL;


export const LOGIN = `${BACKEND}login`