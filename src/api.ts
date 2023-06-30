import { useSuspenseQuery } from "@suspensive/react-query";

const fetchTodo = () =>
  fetch("https://jsonplaceholder.typicode.com/tods/1").then((resp) => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp.json();
    } else {
      // This does not work, since the Promise returned by `json()` is never fulfilled
      return Promise.reject(resp.json());
    }
  });

export const useFetchTodo = ({ ...options } = {}) => {
  return useSuspenseQuery({
    queryKey: ["fetch-todo"],
    queryFn: fetchTodo,
    ...options,
  });
};
