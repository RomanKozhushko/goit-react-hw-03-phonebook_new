import { Formik, Form, Field, } from 'formik';
import styled from 'styled-components';
// import * as  yup from 'yup';


const Input = styled(Field)`
font-size: 30px;
color: red;
`;

const initialValues = {
   name: "",
   phoneNumber: "",
}

export const InputFormPhone = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm();
    };
    
    return (

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
            <lable htmlFor="name">
                Full Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required/>
            </lable>
            <lable htmlFor="phoneNumber">
                Phone number
                <Input
                    type="tel"
                    name="phoneNumber"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />  
            </lable>
                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
}



        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
            <lable htmlFor="name">
                Full Nam