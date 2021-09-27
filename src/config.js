export const APIURL =
process.env.NODE_ENV === 'production'
    ? 'https://app-memories-backend.herokuapp.com/'
    : 'http://localhost:4000';