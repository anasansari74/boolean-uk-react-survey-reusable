export default function CheckBox({ name, type, value, children, ...props }) {
  return (
    <li>
      <label>
        <input {...props} name={name} type="checkbox" value={value} />
        {children}
      </label>
    </li>
  );
}
