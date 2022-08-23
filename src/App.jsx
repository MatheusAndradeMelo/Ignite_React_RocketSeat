import React from "react";
import { useState } from "react";
import { Post } from "./Post";

export function App() {
  return (
    <>
      <Post
        author="Matheus Andrade"
        content="lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <Post author="Albert Einstein" 
      content="lorem ipsum dolor sit amet" 
      />
      
    </>
  );
}
