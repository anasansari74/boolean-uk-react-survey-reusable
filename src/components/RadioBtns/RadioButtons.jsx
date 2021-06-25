import RadioButton from "./RadioButton";

export default function RadioButtons({ name }) {
  return (
    <div class="form__group radio">
      <h3>How do you rate your rubber duck {name}?</h3>
      <ul>
        <RadioButton id={"1"} name={name}>
          1
        </RadioButton>
        <RadioButton id={"2"} name={name}>
          2
        </RadioButton>
        <RadioButton id={"3"} name={name}>
          3
        </RadioButton>
        <RadioButton id={"4"} name={name}>
          4
        </RadioButton>
      </ul>
    </div>
  );
}
