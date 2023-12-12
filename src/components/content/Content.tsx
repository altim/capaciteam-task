import React, { FC } from "react";
import { DocumentType } from "../../api/chapters/chaptersApi.types";
import styles from "./Content.module.scss";

type ContentPropsType = {
  chapters: DocumentType[];
  onSelected: (selectedItem: DocumentType) => void;
  selectedPath: Array<DocumentType["id"]>;
};

export const Content: FC<ContentPropsType> = ({
  chapters,
  onSelected,
  selectedPath,
}) => {
  return (
    <>
      {chapters.map((chapter) => (
        <div key={chapter.id} id={chapter.id} className={styles.chapter}>
          <h2> {chapter.name}</h2>
          <p>{chapter.content}</p>
        </div>
      ))}
    </>
  );
};
