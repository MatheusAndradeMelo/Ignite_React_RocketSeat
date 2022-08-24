import React from "react";
import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post
            author="Matheus Andrade"
            content="lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <Post author="Albert Einstein" content="lorem ipsum dolor sit amet" />
        </main>
      </div>
    </>
  );
}
