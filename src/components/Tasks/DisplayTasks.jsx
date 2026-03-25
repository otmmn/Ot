import { Tasks } from "@/Config/Tasks";
import { useEffect, useState } from "react";
import { Field } from "../ui/field";
import { Checkbox } from "../ui/checkbox";

export const DisplayTasks = () => {
  const [unfinishedTasks, setUnfinishedTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState({});

  useEffect(() => {
    setUnfinishedTasks(Tasks.filter((Task) => !Task.isFinished));
    setFinishedTasks(Tasks.filter((Task) => Task.isFinished));
  }, []);

  const handleCheckBox = (id, value) => {
    setCheckedTasks((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <div className="flex justify-center pt-10 min-h-screen">
      <div className="flex flex-col items-center border-2 border-black px-11">
        <div className="text-3xl py-3">Unfinished Tasks</div>
        {unfinishedTasks.map((Task) => (
          <Field
            key={Task.id}
            orientation="horizontal"
            className="text-xl pt-7"
          >
            <Checkbox
              checked={checkedTasks[Task.id] || false}
              onCheckedChange={(value) => handleCheckBox(Task.id, value)}
            />{" "}
            {Task.name}
          </Field>
        ))}
      </div>
    </div>
  );
};
