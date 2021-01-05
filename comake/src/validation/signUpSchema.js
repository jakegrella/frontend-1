import * as yup from 'yup';

export default yup.object().shape({
    username: yup
        .string('A username is required')
        .min(3, "username must be 3 characters or longer"),
    password: yup
        .string("you must provide a password")
        .min(8, "you password must be 8 characters or longer"),
    confirmPassword: yup
        .string("you must confirm your password"),
    zip: yup
        .string("you Must provide your zip code")
        .min(5, "zip code must be 5 digits long")
        .max(5, "zip code must be 5 digits long")
});