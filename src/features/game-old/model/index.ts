import {createEvent, createStore, createEffect} from "effector";
import {Game, RegistryPlayerInput, RegisterRejectReason, RegisteredPlayer} from "./type";
import {CharacterRole} from "features/character/model/type";

const defaultGame: Game = {
    id: '1',
    players: [],
    maxPlayer: 4
}

export const $game = createStore<Game>(defaultGame)

export const registerPlayer = createEvent<CharacterRole>()

export const startGame = createEvent()

export const registerPlayerFx = createEffect<RegistryPlayerInput, RegisteredPlayer, RegisterRejectReason>()
