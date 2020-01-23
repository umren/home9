import React from "react";

export function Card(props) {
  return <div class="card">
    {props.children}
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <button>{props.buttonText}</button>
  </div>;
}