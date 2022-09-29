import "./styles.css";
import { useState } from "react";
import InputBox from "./InputBox";
import Display from "./Display";
import ActionCTA from "./ActionCTA";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [Error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [display, setDislay] = useState(false);

  function submit() {
    if (name && age) {
      setUserList((userList) => [...userList, { name, age }]);
      setName("");
      setAge("");
    } else {
      setError("name/age is mandatory");
    }
  }

  function changeName(e) {
    setError("");
    setName(e.target.value);
  }
  function changeAge(e) {
    setError("");
    setAge(e.target.value);
  }

  function displayUserList(e) {
    setDislay((display) => !display);
  }
  function clearUserlist(e) {
    setUserList([]);
  }

  const ActionItemCTA = [
    { label: "submit", onClickHandler: submit },
    { label: "display", onClickHandler: displayUserList },
    { label: "clear", onClickHandler: clearUserlist }
  ];

  return (
    <div className="App">
      {display && <Display userList={userList} />}
      <div>{Error && <label>{Error}</label>}</div>
      <InputBox label={"Name"} value={name} onChangeHandler={changeName} />
      <InputBox label={"Age"} value={age} onChangeHandler={changeAge} />
      <ActionCTA ActionItem={ActionItemCTA} />
    </div>
  );
}
