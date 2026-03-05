import { useState } from "react";
import { Tasks } from "../../Config/Tasks";
import { useEffect } from "react";

export const DisplayTasks = () => {
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [unfinishedTasks, setUnfinishedTasks] = useState([]);

  useEffect(() => {
    setFinishedTasks(Tasks.filter((Task) => Task.isFinished));
    setUnfinishedTasks(Tasks.filter((Task) => !Task.isFinished));
  }, []);

  return (
    <div className="flex justify-center gap-9 py-10">
      <div className="px-10 shadow-xl/30">
        <h1 className="text-3xl">Unfinished Tasks</h1>
        <ul className="pt-7">
          {unfinishedTasks.map((Task, key) => {
            return (
              <li key={key} className="py-2">
                <input type="checkbox" /> {Task.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-10 shadow-xl/30">
        <h1 className="text-3xl">Finished Tasks</h1>
        <ul className="pt-7">
          {finishedTasks.map((Task, key) => {
            return (
              <li key={key}>
                <input type="checkbox" /> {Task.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
