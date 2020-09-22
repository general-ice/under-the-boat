import { createStore, createEvent, createEffect } from "effector";
import {NotificationType} from "./type";

export const TIMEOUT = 5000;

export const $notes = createStore<NotificationType[]>([]);

$notes.watch(console.log);

export const $currentNote = $notes.map<NotificationType | null>(([currentNote]) =>
    currentNote !== undefined ? currentNote : null
);

export let currentNoteTimeout: number | null = null;

export const addNote = createEvent<NotificationType>();

export const removeNote = createEvent<NotificationType>();

export const startNotifyLife = createEffect<NotificationType, void>();