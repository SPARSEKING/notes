import { Note } from './Note';

export interface NotesApp {
  title: string
  message: string | null
  grid: boolean
  search: string
  note: Note
  notes: Note[]
}