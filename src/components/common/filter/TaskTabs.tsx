import TaskStatus from "../../../models/task/TaskStatus";
import Tab from "./Tab";

type PropsType = {
  filter: (status: TaskStatus | "all") => void;
  selected: number;
  setSelected: (selected: number) => void;
  isDashboard?: boolean;
};
const TaskTabs = ({
  filter,
  selected,
  setSelected,
  isDashboard,
}: PropsType) => {
  return (
    <>
      <Tab
        name="All"
        color="blue"
        selected={selected === 0}
        onClick={() => {
          filter("all");
          setSelected(0);
        }}
      />
      <Tab
        name="Planned"
        color="green"
        selected={selected === 1}
        onClick={() => {
          filter("planned");
          setSelected(1);
        }}
      />
      <Tab
        name="Active"
        color="yellow"
        selected={selected === 2}
        onClick={() => {
          filter("pending");
          setSelected(2);
        }}
      />
      <Tab
        name="Overdue"
        color="red"
        selected={selected === 3}
        onClick={() => {
          filter("overdue");
          setSelected(3);
        }}
      />
      {!isDashboard && (
        <Tab
          name="Inactive"
          color="gray"
          selected={selected === 4}
          onClick={() => {
            filter("inactive");
            setSelected(4);
          }}
        />
      )}
    </>
  );
};

export default TaskTabs;
