"use client";
import { io } from "socket.io-client";
import { useEffect } from "react";

const socket = io("http://localhost:3001/");

export default function Home() {
  useEffect(() => {
    socket.on("hello", (arg) => {
      console.log(arg);
    });

    socket.emit("howdy", "stranger");

    fetch("/api")
      .then((r) => r.json())
      .then((r) => console.log(r));
  }, []);

  return <div>Hey</div>;
}
