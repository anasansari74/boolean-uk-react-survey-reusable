export default function RadioButton({ id, type, name, children, ...props }) {
  return (
    <li>
      <input {...props} id={name + id} type="radio" name={name} value={id} />
      <label for={id}>{children}</label>
    </li>
  );
}
