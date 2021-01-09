import { useList } from "@roomservice/react";
import React, { useEffect, useState } from "react";
import { Input, Todo } from "../components/ui";

export default function Home() {
  const [todos, list] = useList("my-room", "todos");
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
    <div className="intro-container">
      <p>
        This example has the bare-bones you need to get started with
        RoomService, including
        <ul>
          <li>
            An auth endpoint in <code>/pages/api/roomservice.ts</code>
          </li>
          <li>
            A <code>{`<RoomServiceProvider />`}</code> wrapping the React app in{" "}
            <code>{"/pages/_app.ts"}</code>
          </li>
          <li>A simple todo list</li>
        </ul>
        All you need is a free API key from{" "}
        <a href="https://app.roomservice.dev" target="_blank">
          app.roomservice.dev
        </a>
        . Then add <code>{"ROOMSERVICE_API_KEY=<your api key>"}</code> to a{" "}
        <code>.env</code> file in the root directory of this example (in the
        same directory as the <code>package.json</code> file).
      </p>
      <p>
        Finally, restart your <code>yarn dev</code> command and open this page
        in two tabs. Edits to the text in one will show up in the other.
      </p>

      <h2>Todos</h2>
      <p>Press enter to add a new todo! Click a todo to delete it.</p>
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
    </div>
  );
}
