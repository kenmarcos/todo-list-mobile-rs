import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { TasksContextProvider } from "./src/contexts/TasksContext";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <TasksContextProvider>
        <Home />
      </TasksContextProvider>
    </>
  );
}
