import CheckBox from "./CheckBox";

export default function FeaturesCheckboxes({ name }) {
  return (
    <div class="form__group">
      <h3>
        What would you say that are the {name} features of your rubber duck?
      </h3>
      <ul>
        <CheckBox name={`${name}Features`} value={"colour"}>
          It's yellow!
        </CheckBox>
        <CheckBox name={`${name}Features`} value={"sound"}>
          It squeaks!
        </CheckBox>
        <CheckBox name={`${name}Features`} value={"logo"}>
          It has a logo!
        </CheckBox>
        <CheckBox name={`${name}Features`} value={"size"}>
          Its big!
        </CheckBox>
      </ul>
    </div>
  );
}
