import {useMutation, useQuery} from "@apollo/client";
import {deleteQuery, query} from "../schema";

const GetTodos = () => {

    const {loading, error, data} = useQuery(query);
    const [deleteTodo] = useMutation(deleteQuery, {
        refetchQueries: [
            query
        ],
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.todos.map(({id, todo}) => (
        <div key={id}>
            <h3>{todo}
                <button className="btn btn-light" onClick={() => {
                    deleteTodo({
                        variables: {
                            id: id
                        }
                    })
                }
                }>X</button>
            </h3>
        </div>
    ))

};

export default GetTodos