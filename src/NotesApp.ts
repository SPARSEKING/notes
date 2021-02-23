import { Note } from './Note';

export interface NotesApp {
  title: string
  grid: boolean
  note?: Note
}