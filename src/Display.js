export default function Display({ userList }) {
  return (
    <div>
      {userList.map(({ name, age }) => {
        return (
          <p>
            <label>{name}</label>
            <label>{age}</label>
          </p>
        );
      })}
    </div>
  );
}
