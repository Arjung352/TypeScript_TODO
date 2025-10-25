import Search from "./components/Search";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <>
      <h1 className="mt-10 text-4xl text-center">Todo using TypeScipt</h1>
      <Search />
      <Todos />
      <AddTodo />
    </>
  );
}

export default App;
