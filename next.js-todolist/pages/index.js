import { useList } from "@roomservice/react";
import { useState } from "react";
import { Container, Input, Todo } from "../components/ui";

export default function List() {
  const [todos, list] = useList("lists", "todos");
  const [text, setText] = useState("");

  function onCheckOff(i) {
    if (!list) return;
    list.delete(i);
  }

  function onEnterPress() {
    if (!list) return;
    list.push(text);
    setText("");
  }

  return (
    <Container>
      <p>
        In this example, your Auth Webhook is already setup, and we've created a
        little todo list using a Room Service{" "}
        <a href="https://docs.roomservice.dev/docs/concepts/lists">List</a>.
        You'll want to replace the API_KEY in{" "}
        <code>{"/pages/api/roomservice.js"}</code> before you get started.{" "}
      </p>

      <h2>Todos</h2>
      <p>Press enter to add a new todo!</p>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onEnterPress();
          }
        }}
      />
      {todos.map((l, i) => (
        <Todo key={JSON.stringify(l) + "-" + i} onClick={() => onCheckOff(i)}>
          {l.object || l}
          {"-"}
          {i}
        </Todo>
      ))}
    </Container>
  );
}
