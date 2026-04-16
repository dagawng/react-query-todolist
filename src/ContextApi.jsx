import { createContext, useState, useContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [editValue, setEditValue] = useState("");

  return (
    <TaskContext value={{ editValue, setEditValue }}>{children}</TaskContext>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("There is an error");
  }

  return context;
};
