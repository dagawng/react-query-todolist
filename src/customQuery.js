import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toaster } from "./components/ui/toaster";

import { api } from "./axiosInstance";

export const useTaskQuery = () => {
  const queryClient = useQueryClient();

  const {
    data,
    isPending: isLoading,
    error: taskError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await api.get("tasks");
      return response.data;
    },
  });

  // create task
  const { mutate: addTask, isPending: isAdding } = useMutation({
    mutationFn: (newTask) => api.post("tasks", newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toaster.create({
        title: "Added Successfully",

        type: "success",
      });
    },
  });

  //update task status
  const { mutate: updateStatus, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, completed }) => api.patch(`tasks/${id}`, { completed }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  // update task
  const { mutate: updateTask } = useMutation({
    mutationFn: ({ id, title }) => api.put(`tasks/${id}`, { title }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toaster.create({
        title: "Hooray 🥳🥳🥳!!!",
        description: "You have successfully updated the task.",
        type: "success",
      });
    },
  });

  // delete task
  const { mutate: deleteTask, isPending: isDeleting } = useMutation({
    mutationFn: (id) => api.delete(`tasks/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toaster.create({
        title: "Deleted Successfully",

        type: "error",
      });
    },
  });

  return {
    data,
    isLoading,
    taskError,
    addTask,
    isAdding,
    deleteTask,
    isDeleting,
    updateStatus,
    updateTask,
    isUpdating,
  };
};
