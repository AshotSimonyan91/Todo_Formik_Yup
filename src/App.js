import './App.css';
import CustomForm from "./form/Form";
import GetTodos from "./todoList/getTodos";


function App() {

    return (
        <div className="App">
            <CustomForm />
            <GetTodos />
        </div>
    );
}

export default App;
