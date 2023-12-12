import React from "react";
import styles from "./App.module.scss";
import { useChapters } from "./hooks/useChapters";

function App() {
  const { chaptersTree } = useChapters();

  // console.log("chaptersTree:", chaptersTree);

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>Left sidebar</div>
      <div className={styles.content}>Content area</div>
    </div>
  );
}

export default App;
