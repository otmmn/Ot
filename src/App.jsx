import { Header } from "./components/Header/Header";
import { Panel } from "./components/Panel/Panel";
import { DisplayTasks } from "./components/Tasks/DisplayTasks";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Header />
      <Panel />
      <DisplayTasks />
    </div>
  );
}

export default App;
