import CheckBox from "./CheckBox";

export default function TimeSpentCheckboxes() {
  return (
    <div class="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <ul>
        <CheckBox name={"timeSpent"} value={"swimming"}>
          Swimming
        </CheckBox>
        <CheckBox name={"timeSpent"} value={"bathing"}>
          Bathing
        </CheckBox>
        <CheckBox name={"timeSpent"} value={"chatting"}>
          Chatting
        </CheckBox>
        <CheckBox name={"timeSpent"} value={"noTime"}>
          I don't like to spend time with it
        </CheckBox>
      </ul>
    </div>
  );
}
