import {ErrorMessage, Field, Formik, Form} from "formik";
import * as Yup from "yup";
import './form.css';
import {addTodo} from "../slice/Slice";
import {useDispatch} from "react-redux";
import Service from "../service/service";

const CustomForm = () => {

    const dispatch = useDispatch();


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
                Service(`mutation PutTodo($name: String) {
                          putTodo(name: $name) {
                            id
                            name
                          }
                       }`,{"name": values.todo})
                    .then(res => {
                    dispatch(addTodo(res.data.todos))
                })

            }}
        >
            <Form className="container border">
                <h2>Todo</h2>
                <label htmlFor="todo"></label>
                <Field
                    id="todo"
                    name="todo"
                    type="input"
                />
                <ErrorMessage name='todo' className='error' component='div'/>
                <button className="btn btn-outline-primary" type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;