import { useContext } from "react";
import Department from "../../../models/Department";
import { TaskModalContext } from "../../../contexts/TaskModalContext";
import { DepartmentContext } from "../../../contexts/DepartmentContext";

const DepartmentField = () => {
  const { dept, setDept } = useContext(TaskModalContext);
  const { departments } = useContext(DepartmentContext);

  const departmentOptions = departments.map((department: Department) => {
    return (
      <option key={department.name} value={department.name}>
        {department.name}
      </option>
    );
  });

  return (
    <>
      <label>Department: </label>
      <select
        className="border rounded-md p-1 outline-none border-gray-400"
        value={dept}
        onChange={(e) => {
          setDept(e.target.value);
        }}
      >
        {departmentOptions}
      </select>
    </>
  );
};

export default DepartmentField;
