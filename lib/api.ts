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
// lib/api.ts

const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // дозволяє axios працювати з cookie
});

// export const getNotes = async () => {
//   // await delay(2000);
//   const res = await axios.get<NoteListResponse>("/notes");
//   return res.data;
// };

// lib/api.ts

// Інший код файлу

export const getSingleNote = async (id: string) => {
  const res = await nextServer.get<Note>(`/notes/${id}`);
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
  const res = await nextServer.get<Category[]>("/categories");
  return res.data;
};

export const getNotes = async (categoryId?: string) => {
  const res = await nextServer.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  return res.data;
};

// lib/api.ts

export type NewNoteData = {
  title: string;
  content: string;
  categoryId: string;
};

export const createNote = async (data: NewNoteData) => {
  const res = await nextServer.post<Note>("/notes", data);
  return res.data;
};
