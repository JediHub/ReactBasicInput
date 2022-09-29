export default function ActionCTA({ ActionItem }) {
  return (
    <div>
      {ActionItem.map(({ label, onClickHandler }) => (
        <button onClick={onClickHandler}>{label}</button>
      ))}
    </div>
  );
}
