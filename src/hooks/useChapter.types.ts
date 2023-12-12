import { DocumentType } from "../api/chapters/chaptersApi.types";

export type ChapterTreeItemType = DocumentType & {
  children: ChapterTreeItemType[];
};

export type ChapterTreeType = ChapterTreeItemType[];
