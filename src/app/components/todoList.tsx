import { Todo } from '@/lib/drizzle';

const getData = async () => {
  try {
    const res = await fetch("http://todo-next-js-zeta.vercel.app/api/todo");   
    if (!res.ok) {
      throw new Error("Failed Fetching the Data");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const TodoList = async () => {
  const data: Todo[] = await getData();

  if (!data || data.length === 0) {
    return <p>No data found</p>;
  }

  return (
    <>
      {data.map((items) => (
        <div className='bg-gray-300 px-4 py-3 flex h-full shadow-lg rounded-lg gap-x-4 items-center' key={items.id}>
          <div className='bg-secondary h-2 w-2 rounded-full'></div>
          <p className='text-lg font-medium'>{items.task}</p>
        </div>
      ))}
    </>
  );
};

export default TodoList;
