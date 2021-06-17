import React from "react";

export default function TableSetUp(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.rating}</td>
      <td>{props.kda}</td>
    </tr>
  );
}