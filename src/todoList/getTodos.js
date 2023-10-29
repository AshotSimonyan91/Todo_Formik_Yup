import Service from "../service/service";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../slice/Slice";


const GetTodos = () => {

    const todos = useSelector(state => state)
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const query = `
      query Todos {
          todos {
            id
            name
          }
      }
    `;
    useEffect(() => {
        Service(query)
            .then(res => {
                setData([...res.data.todos])
            })
    }, [todos]);

    return data.map(({id, name}, i) => (
        <div key={i}>
            <p>{name}
                <button onClick={() =>{
                    Service(`mutation Mutation($id: String) {
                                      delete(id: $id) {
                                        id
                                        name
                                      }
                                     }`,{"id": id})
                        .then(res => {dispatch(addTodo(res.data.putTodo))})}}
                >X</button>
            </p>
        </div>
    ))

};

export default GetTodos