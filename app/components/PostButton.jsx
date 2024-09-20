"use client";

import { Button } from "@mui/material";
import { useState } from "react";

export default function PostButton() {
  const [message, setMessage] = useState(null);
  function handleClick() {
    fetch("http://localhost:3000/examples", { method: "POST" })
      .then((data) => {
        data.json().then((res) => setMessage(res.message));
      })
      .catch(() => {
        console.log("An error occured");
      });
  }

  return (
    <>
      <Button data-test="intercept-button" onClick={handleClick}>
        Post Data
      </Button>
      {!!message && <p data-test="intercept-message">{message}</p>}
    </>
  );
}
