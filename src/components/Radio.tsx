import { ChangeEventHandler } from "react";

interface RadioProps {
  selectedStatus: "To-do" | "Doing" | "Done";
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const statuses: Array<"To-do" | "Doing" | "Done"> = ["To-do", "Doing", "Done"];

const Radio: React.FC<RadioProps> = ({ selectedStatus, onChange }) => {
  return (
    <div className="radioBtns flex flex-row gap-10">
      {statuses.map((status) => (
        <div className="form-control" key={status}>
          <label className="label cursor-pointer">
            <span className="label-text pe-4 text-black">{status}</span>
            <input
              type="radio"
              name="radio-status"
              className="radio border-black"
              value={status}
              checked={selectedStatus === status}
              onChange={onChange}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
