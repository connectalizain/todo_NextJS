import { Todo } from "@/lib/drizzle";


const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todo", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!res.ok) {
      throw new Error("Failed Fetching the Data");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(`Fetching Failed ERROR = ${error}`);
  }
};

const TodoList = async () => {
  const resonse: {data: Todo[]}  = await getData();
console.log(`response : ${resonse}`)


  return (
    <>
      {resonse.data?.map((items) => (
        <div
          className="bg-gray-300 px-4 py-3 flex h-full shadow-lg rounded-lg gap-x-4 items-center"
          key={items.id}
        >
          <div className="bg-secondary h-2 w-2 rounded-full"></div>
          <p className="text-lg font-medium">{items.task}</p>
        </div>
      ))}
    </>
  );
};

export default TodoList;


