import {createEffect, createEvent, createStore} from "effector";
import {
    GameDistribution,
    Game,
    GameStatus,
    GameStoreType
} from "./types";
import {RegisteredPlayer} from "features/game-old/model/type";

export const $game = createStore<GameStoreType>(null)

export const $gameWaitingRoom = createStore()

export const $gameDistribution = createStore<GameDistribution>({
    characters: [],
    navigationCards: [],
    equipments: []
})