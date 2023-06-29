import { useQuery } from "@tanstack/react-query";

const fetchTodo = () => fetch("https://jsonplaceholder.typicode.com/todos/1");

export const useFetchTodo = ({ ...options } = {}) => {
  return useQuery({
    queryKey: ["fetch-todo"],
    queryFn: fetchTodo,
    ...options,
  });
};
