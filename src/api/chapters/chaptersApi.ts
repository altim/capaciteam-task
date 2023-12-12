import { axiosInstance } from "../axiosInstance";
import { DocumentType } from "./chaptersApi.types";

export const getChapters = async (): Promise<DocumentType[]> => {
  return (await axiosInstance.get("/backend.json")).data.data.content;
};
