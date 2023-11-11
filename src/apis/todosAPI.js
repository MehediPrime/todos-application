// api.js
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  deleteMethod,
  getMethod,
  postMethod,
  putMethod,
} from "./apiMethod/apiMethod";

//React Query - GET
export const useGetTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => getMethod({ url: `/todos/` }),
  });
};

//React Query - POST
export const usePostTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return postMethod({ url: "/todos", data: newTodo });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return mutation;
};

//React Query - PUT
export const usePutTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (putTodo) => {
      return putMethod({ url: `/todos/${putTodo?.id}`, data: putTodo });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return mutation;
};

//React Query - Delete
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (putTodo) => {
      return deleteMethod({ url: `/todos/${putTodo?.id}` });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return mutation;
};
