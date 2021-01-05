import * as yup from "yup";

export default yup.object().shape({
    username: yup
        .string('You must provide your username')
        .min(3, "Your username was 3 characters or longer"),
    password: yup
        .string('you must input your password')
        .min(8, "your password was 8 characters or longer")
});