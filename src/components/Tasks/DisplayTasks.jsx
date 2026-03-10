import { useState } from "react";
import { Tasks } from "../../Config/Tasks";
import { useEffect } from "react";
import { ConfirmationMessages } from "../../Config/ConfimrationMessages";

export const DisplayTasks = () => {
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [unfinishedTasks, setUnfinishedTasks] = useState([]);

  const { complete_task, uncheck_task } = ConfirmationMessages;

  useEffect(() => {
    setFinishedTasks(Tasks.filter((Task) => Task.isFinished));
    setUnfinishedTasks(Tasks.filter((Task) => !Task.isFinished));
  }, []);

  const handleTaskStatus = (e) => {
    if (e.target.checked) {
      const confirmation = confirm(complete_task);
      if (confirmation) {
        setFinishedTasks([...finishedTasks, Tasks[e.target.value - 1]]);
        setUnfinishedTasks(
          unfinishedTasks.filter((Task) => Task != Tasks[e.target.value - 1])
        );
      }
    } else {
      const confirmation = confirm(uncheck_task);
      if (confirmation) {
        setUnfinishedTasks([...unfinishedTasks, Tasks[e.target.value - 1]]);
        setFinishedTasks(
          finishedTasks.filter((Task) => Task != Tasks[e.target.value - 1])
        );
      }
    }
  };

  return (
    <div className="flex justify-center gap-9 py-10">
      <div className="px-10 shadow-xl/30">
        <h1 className="text-3xl">Unfinished Tasks</h1>
        <ul className="pt-7">
          {unfinishedTasks.map((Task) => {
            return (
              <li key={Task.id} className="py-2">
                <input
                  type="checkbox"
                  value={Task.id}
                  onClick={handleTaskStatus}
                />{" "}
                {Task.name}
                <p>Commit testing</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-10 shadow-xl/30">
        <h1 className=" text-3xl">Finished Tasks</h1>
        <ul className="pt-7">
          {finishedTasks.map((Task) => {
            return (
              <li key={Task.id} className="py-2">
                <input
                  type="checkbox"
                  value={Task.id}
                  onClick={handleTaskStatus}
                  defaultChecked={true}
                />{" "}
                {Task.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
