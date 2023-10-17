type ToggleProps = {
  isChecked?: boolean;
  onChange: (checked: boolean) => void;
};
export const Toggle = ({ isChecked, onChange }: ToggleProps) => {
  return (
    <label className="switch">
      <input
        className="switch-input"
        type="checkbox"
        defaultChecked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider round"></span>
    </label>
  );
};
