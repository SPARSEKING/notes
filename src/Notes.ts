import { Note } from '@/Note';
export interface Notes {
    notes: Note[]
    message: null | string
    search: string
    edit: boolean
    indexNote: null | number
}