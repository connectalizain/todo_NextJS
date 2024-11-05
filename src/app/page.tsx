
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";
import { NewTodo } from "@/lib/drizzle";

const Home = () => {
 
  return (
    <main className="bg-gradient-to-br from-primary to-secondary backdrop-blur-lg h-screen flex items-center justify-center ">
      <div className="px-3 py-4 rounded-xl bg-gradient-to-br from-[#D9D9D9]/50 to-white/30  max-w-screen-md w-1/2 ">
        <TodoList />
        <AddTodo />
        <div className="bg-black/80 rounded-xl mx-auto h-1.5 w-1/2 mt-5"></div>
      </div>
    </main>
  );
};

export default Home;
