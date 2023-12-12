import { useEffect, useMemo, useRef, useState } from "react";
import { DocumentType } from "../api/chapters/chaptersApi.types";
import { getChapters } from "../api/chapters/chaptersApi";
import { ChapterTreeType } from "./useChapter.types";

export const useChapters = () => {
  const [chapters, setChapters] = useState<DocumentType[]>([]);
  const loadedOnce = useRef(false);

  useEffect(() => {
    (async () => {
      if (!loadedOnce.current) {
        loadedOnce.current = true;
        const data = await getChapters();
        setChapters(data);
      }
    })();
  }, []);

  const chaptersTree = useMemo(() => {
    if (!chapters.length) return [];
    const tree: ChapterTreeType = [];

    chapters
      ?.filter((chapter) => chapter.level === 1)
      ?.forEach((chapter) => {
        tree.push({
          ...chapter,
          children: [],
        });
      });

    chapters
      ?.filter((chapter) => chapter.level === 2)
      ?.forEach((chapter) => {
        tree
          .find((item) => item.id === chapter.parent_id)
          ?.children.push({ ...chapter, children: [] });
      });

    // chapters
    //   ?.filter((chapter) => chapter.level === 3)
    //   ?.forEach((chapter) => {
    //     tree.forEach((levelOneChapter) => {
    //       levelOneChapter.children
    //         .find((item) => item.id === chapter.parent_id)
    //         ?.children.push({ ...chapter, children: [] });
    //     });
    //   });

    return tree;
  }, [chapters]);

  return {
    chapters,
    chaptersTree,
  };
};
