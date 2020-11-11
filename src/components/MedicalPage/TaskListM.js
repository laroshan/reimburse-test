import React from "react";
import { FaTrash } from "react-icons/fa";

const TaskList = (props) => {
  return props.taskList.map((val, idx) => {
    let projectName = `projectName-${idx}`,
      task = `task-${idx}`,
      taskNotes = `taskNotes-${idx}`;
    // taskStatus = `taskStatus-${idx}`;
    return (
      <tr key={val.index}>
        <td>
          <input
            type="date"
            name="date"
            data-id={idx}
            id={projectName}
            className="form-control "
          />
        </td>
        <td>
          <textarea
            name="Description"
            id={taskNotes}
            data-id={idx}
            className="form-control"
          ></textarea>
        </td>
        <td>
          <input
            type="text"
            name="task"
            id={task}
            data-id={idx}
            className="form-control "
          />
        </td>
        <td>
          {/* <select
            name="taskStatus"
            id={taskStatus}
            data-id={idx}
            className="form-control"
          > */}
          <input
            type="text"
            name="task"
            id={task}
            data-id={idx}
            className="form-control "
          />
          {/* <option value="pending">Pending</option>
            <option value="In Progress">In progress</option>
            <option value="Completed">Completed</option>
            <option value="Hold">Hold</option>
          </select> */}
        </td>
        <td>
          {/* <div className="mb-3">
            <div className="form-file" id="formcheck-api-regular">
              <div className="form-file-input" />
            </div>
          </div> */}
          {""}
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">
              Choose file
            </label>
          </div>
        </td>
        <td>
          {/* {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
          ) : ( */}
          <button className="btn btn-danger" onClick={() => props.delete(val)}>
            <FaTrash />
          </button>
          {/* )} */}
        </td>
      </tr>
    );
  });
};
export default TaskList;
