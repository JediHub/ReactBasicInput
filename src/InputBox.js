export default function InputBox({ label, value, onChangeHandler }) {
  return (
    <div>
      <label>{label} </label>
      <input value={value} onChange={onChangeHandler} />
    </div>
  );
}
