import RadioButtons from "./RadioBtns/RadioButtons";
import FeaturesCheckboxes from "./Checkboxes/FeaturesCheckboxes";
import TimeSpentCheckboxes from "./Checkboxes/TimeSpentCheckbox";

export default function Form() {
  return (
    <form class="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <FeaturesCheckboxes name={"best"} />
      <FeaturesCheckboxes name={"worst"} />
      <RadioButtons name={"consistency"} />
      <RadioButtons name={"colour"} />
      <RadioButtons name={"logo"} />
      <TimeSpentCheckboxes />
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please (uwu)??
        <input type="email" name="email" value="" />
      </label>
      <input class="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
