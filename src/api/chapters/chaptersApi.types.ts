export type DocumentType = {
  id: string;
  name: string;
  level: number;
  parent_id: string;
  content: string;
};

export type ChaptersApiResponseType = {
  data: {
    content: {
      document: DocumentType[];
    };
  };
};
