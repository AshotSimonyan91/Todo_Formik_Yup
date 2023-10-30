import {gql} from "@apollo/client";


export const query = gql`
       query Todo{
           todos{
                id
                todo
            }
       }
    `;
export const deleteQuery = gql`
        mutation Delete($id: String) {
            delete(id: $id) {
                id
                todo
            }
        }
    `;

export const addTodo = gql`
        mutation CreateTodo($todo: String) {
            createTodo(todo: $todo) {
                id
                todo
            }
        }
    `;