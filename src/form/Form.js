import {ErrorMessage, Field, Formik, Form} from "formik";
import * as Yup from "yup";
import './form.css';
import {useMutation} from "@apollo/client";
import {addTodo, query} from "../schema";

const CustomForm = () => {

    const [creatTodo] = useMutation(addTodo, {
        refetchQueries: [
            query
        ],
    });

    return (
        <Formik
            initialValues={{
                todo: ''
            }}
            validationSchema={Yup.object({
                todo: Yup.string()
                    .min(2, 'Min 2 characters')
                    .required('Required'),
            })}
            onSubmit={values => {
                creatTodo({
                    variables: {
                        todo: values.todo,
                    }
                })
            }}
        >
            <Form className="form border form">
                <h2>Todo</h2>
                <label htmlFor="todo"></label>
                <Field
                    id="todo"
                    name="todo"
                    type="input"
                />
                <button className="btn btn-outline-primary" type="submit">Отправить</button>
                <ErrorMessage name='todo' className='error' component='div'/>
            </Form>
        </Formik>
    )
}

export default CustomForm;