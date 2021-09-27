// original code - delete if new code connects with heroku
// export const APIURL =
//   window.location.hostname === 'localhost'
//     ? 'http://localhost:4000'
//     : 'https://app-memories-backend.herokuapp.com/';

export const APIURL =
process.env.NODE_ENV === 'production'
    ? 'https://app-memories-backend.herokuapp.com/'
    : 'http://localhost:4000';