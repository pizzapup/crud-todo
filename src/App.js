import "./App.css";
import FormComp from "./components/formComp/formComp";
import ToDoList from "./components/toDoList/toDoList";

function App() {
  return (
    <div className="App">
      <h1>GROCERY LIST</h1>
      <FormComp />
      <ToDoList />
    </div>
  );
}

export default App;
