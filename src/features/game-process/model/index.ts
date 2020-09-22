import {createEvent, createStore} from "effector";
import {GamePlayer, GameProcess, GameStatus} from "./types";
import {RegisteredPlayer} from "features/game/model/type";

const defaultGameProcess: GameProcess = {
    players: [],
    whoStep: null,
    stage: null,
    status: GameStatus.pending
}

export const $gameProcess = createStore<GameProcess>(defaultGameProcess)

export const startCardDistribution = createEvent()

export const startGameProcess = createEvent<RegisteredPlayer[]>()