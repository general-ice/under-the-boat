import {createEffect, createEvent, createStore} from "effector";
import {
    GameDistribution,
    GamePlayer,
    GameProcess,
    GameStatus,
    CardDistributionInputData,
    GivePlayerEquip,
    RecomputePlayerCard
} from "./types";
import {RegisteredPlayer} from "features/game/model/type";

const defaultGameProcess: GameProcess = {
    players: [],
    whoStep: null,
    boatPositions: [],
    stage: null,
    status: GameStatus.pending
}

export const $gameProcess = createStore<GameProcess>(defaultGameProcess)

export const $gameDistribution = createStore<GameDistribution>({
    characters: [],
    navigationCards: [],
    equipments: []
})

export const computeBasicPlayerFx = createEffect<RegisteredPlayer[], GamePlayer[]>()

export const startDistribution = createEvent()

export const startCardDistributionFx = createEffect<CardDistributionInputData, GameDistribution>()

export const startDistributeEquipmentFx = createEffect()

export const giveOneEquipmentAll = createEvent

export const distributeEquipmentFx = createEffect()

export const givePlayerEquipment = createEvent<GivePlayerEquip>()

export const recomputePlayerCards = createEvent<RecomputePlayerCard>()

export const startGameProcess = createEvent<RegisteredPlayer[]>()