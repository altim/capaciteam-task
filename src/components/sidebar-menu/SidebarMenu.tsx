import styles from "./SidebarMenu.module.scss";
import { ChapterTreeItemType } from "../../hooks/useChapter.types";
import React, { FC } from "react";
import classNames from "classnames";

type SidebarMenuProps = {
  chaptersTree: ChapterTreeItemType[];
  onSelected: (selectedItem: ChapterTreeItemType) => void;
  selectedPath: Array<ChapterTreeItemType["id"]>;
};
const renderMenu = (
  chaptersTree: ChapterTreeItemType[],
  onClick: (selectedItem: ChapterTreeItemType) => void,
  selectedPath: Array<ChapterTreeItemType["id"]>,
) => {
  return (
    <ul className={styles.list}>
      {chaptersTree.map((menuItem: ChapterTreeItemType) => (
        <li
          key={menuItem.id}
          onClick={(e) => {
            e.stopPropagation();
            onClick(menuItem);
          }}
          className={classNames(styles.listItem, {
            [styles.expandable]: menuItem?.children?.length,
            [styles.expanded]:
              !!menuItem?.children.length && selectedPath.includes(menuItem.id),
          })}
        >
          <a href={`#${menuItem.id}`}>
            <span
              className={classNames({
                [styles.selectedItem]: selectedPath.includes(menuItem.id),
              })}
            >
              {menuItem.name}
            </span>
          </a>
          {menuItem?.children?.length && selectedPath.includes(menuItem.id)
            ? renderMenu(menuItem.children, onClick, selectedPath)
            : null}
        </li>
      ))}
    </ul>
  );
};
export const SidebarMenu: FC<SidebarMenuProps> = ({
  chaptersTree,
  onSelected,
  selectedPath,
}) => {
  return renderMenu(chaptersTree, onSelected, selectedPath);
};
