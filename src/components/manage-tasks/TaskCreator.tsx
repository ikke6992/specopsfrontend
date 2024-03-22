import { useContext, useEffect } from "react";
import {
  TaskModalContext,
  TaskModalProvider,
} from "../../contexts/TaskModalContext";
import TaskBody from "../../models/task/TaskBody";
import Modal from "../common/modal/Modal";
import FieldCombination from "./fields/FieldCombination";
import {
  DepartmentProvider,
} from "../../contexts/DepartmentContext";
import getAll from "../../services/getAll";

const Content = (props: {
  close: () => void;
  submit: (task: TaskBody) => void;
}) => {
  const {
    taskName,
    dept,
    timeframe,
    interval,
    deadline,
    setDept,
    setDeadline,
  } = useContext(TaskModalContext);

  useEffect(() => {
    const getDepartment = async () => {
      const data = await getAll("departments");
      setDept(data[0].name);
    };
    getDepartment();
    const date = new Date().toJSON().slice(0, 10);
    setDeadline(date);
  }, []);

  return (
    <Modal
      name="Create Task"
      edit={false}
      close={props.close}
      submit={() => {
        props.submit({
          name: taskName,
          dept: dept,
          timeframe: timeframe,
          interval: interval,
          deadline: deadline,
        });
      }}
      form={<FieldCombination />}
    />
  );
};

const TaskCreator = (props: {
  close: () => void;
  submit: (task: TaskBody) => void;
}) => {
  return (
    <TaskModalProvider>
      <DepartmentProvider>
        <Content close={props.close} submit={props.submit} />
      </DepartmentProvider>
    </TaskModalProvider>
  );
};

export default TaskCreator;
