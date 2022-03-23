import { useState } from "react";

function TodoList({ todos }) {
  const [work, setWork] = useState("");
  const handleChange = (e) => {
    setWork(e.target.value.toLowerCase());
  };
  let dataValue = todos.filter((todos) => {
    if (todos === "") {
      return todos;
    } else {
      return todos.title.toLowerCase().includes(work);
    }
  });

  return (
    <div>
      <h1 className="text-3xl font-bold underline">To do List</h1>
      <div className="flex">
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </>
        <>
          <input
            className="border border-black-700 "
            type="search"
            name="todo"
            id="todo"
            value={work}
            onChange={handleChange}
            placeholder=" Search ..."
          />
        </>
      </div>
      {dataValue.map((item) => (
        <li className="px-3 py-2 flex items-center" key={item.id}>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
          {item.title}
        </li>
      ))}
    </div>
  );
}
export default TodoList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: {
      todos: data,
    },
  };
}
