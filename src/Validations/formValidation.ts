import * as yup from "yup";


export const basicSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email("please enter a valid email").required(),
    birthday: yup.date().required()
})