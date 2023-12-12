import React, { FC } from "react";
import { DocumentType } from "../../api/chapters/chaptersApi.types";
import styles from "./Content.module.scss";
import { ChapterTreeItemType } from "../../hooks/useChapter.types";

type ContentPropsType = {
  chapters: DocumentType[];
  onSelected: (selectedItem: ChapterTreeItemType) => void;
};

export const Content: FC<ContentPropsType> = ({ chapters, onSelected }) => {
  return (
    <>
      {chapters.map((chapter) => (
        <div
          key={chapter.id}
          id={chapter.id}
          className={styles.chapter}
          onClick={() => onSelected(chapter as ChapterTreeItemType)}
        >
          <h2> {chapter.name}</h2>
          <p>{chapter.content}</p>
        </div>
      ))}
    </>
  );
};
