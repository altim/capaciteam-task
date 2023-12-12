import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { getChapters } from "./api/chapters/chaptersApi";
import { DocumentType } from "./api/chapters/chaptersApi.types";

function App() {
  const [chapters, setChapters] = useState<DocumentType[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getChapters();
      setChapters(data);
    })();
  });

  console.log("CHAPTERS:", chapters);

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>Left sidebar</div>
      <div className={styles.content}>Content area</div>
    </div>
  );
}

export default App;
