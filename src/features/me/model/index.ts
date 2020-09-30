import {createEffect, createEvent, createStore} from "effector";
import { Me } from "./type";

const DEFAULT_ME: Me = {
    sessionId: null,
    playerId: null
}

export const $me = createStore<Me>(DEFAULT_ME)

export const createSession = createEvent()

export const createSessionFx = createEffect<void, Me>()