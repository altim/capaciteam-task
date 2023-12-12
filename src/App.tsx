import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { useChapters } from "./hooks/useChapters";
import { SidebarMenu } from "./components/sidebar-menu/SidebarMenu";
import { ChapterTreeItemType } from "./hooks/useChapter.types";
import { Content } from "./components/content/Content";

function App() {
  const [selectedChapter, setSelectedChapter] = useState<
    ChapterTreeItemType | undefined
  >(undefined);
  const [selectedPath, setSelectedPath] = useState<
    Array<ChapterTreeItemType["id"]>
  >([]);
  const { chapters, chaptersTree } = useChapters();

  const getPathIds = (menuItemId: string) => {
    const path = [];
    let menuItem = chapters.find((item) => item.id === menuItemId);
    if (!menuItem) return [];
    path.push(menuItem.id);

    while (menuItem?.parent_id) {
      const parent = chapters.find((item) => item.id === menuItem?.parent_id);
      if (parent) {
        path.push(parent.id);
        menuItem = parent;
      } else {
        menuItem = undefined;
      }
    }

    return path;
  };

  const handleMenuItemSelected = (selectedMenuItem: ChapterTreeItemType) => {
    if (!selectedMenuItem) return;
    setSelectedChapter(selectedMenuItem);
    const pathIds = getPathIds(selectedMenuItem?.id);
    setSelectedPath(pathIds);
  };

  useEffect(() => {
    if (!chaptersTree.length) return;
    setSelectedChapter(chaptersTree[0]);
    const pathIds = getPathIds(chaptersTree[0]?.id);
    setSelectedPath(pathIds);
  }, [chaptersTree]);

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <SidebarMenu
          chaptersTree={chaptersTree}
          onSelected={handleMenuItemSelected}
          selectedPath={selectedPath}
        />
      </div>
      <div className={styles.content}>
        <Content chapters={chapters} onSelected={handleMenuItemSelected} />
      </div>
    </div>
  );
}

export default App;
