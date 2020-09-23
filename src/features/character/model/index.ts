import {createEvent, createStore, createEffect} from "effector";
import { CharactersMap, Characters } from "./type";

export const printCharacters = createEvent()

export const requestCharacters = createEvent()
export const requestCharactersFx = createEffect<void, CharactersMap>()

export const $characters = createStore<Characters>({
    data: {} as CharactersMap,
    loading: false
})