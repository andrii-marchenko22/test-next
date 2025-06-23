// lib/api.ts

import axios from "axios";

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
axios.defaults.baseURL = "https://next-docs-api.onrender.com";

// export const getNotes = async () => {
//   // await delay(2000);
//   const res = await axios.get<NoteListResponse>("/notes");
//   return res.data;
// };

// lib/api.ts

// Інший код файлу

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const getCategories = async () => {
  const res = await axios<Category[]>("/categories");
  return res.data;
};

export const getNotes = async (categoryId?: string) => {
  const res = await axios.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  return res.data;
};
