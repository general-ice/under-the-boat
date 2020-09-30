import {EquipmentCard, EquipmentCardType} from "features/card/model/type";
import {Character, CharacterInGame, CharacterRole, Characters} from "features/character/model/type";
import {MePlayer, Player, PlayerId} from "features/player/model/type";

export type GameId = string

export type GameStoreType = Nullable<Game>

export enum GameStatus {
    pending,
    active,
    paused,
    finished
}

export interface GameWaitingRoom {
    players: PlayerId[]
}

export interface Game {
    me: MePlayer
    id: GameId
    status: GameStatus
    positions: PlayerId[]
    otherPlayers: Player[]
    whoSteps: PlayerId
}

export interface GameDistribution {
    characters: CharacterInGame[]
    equipments: EquipmentCard[]
    navigationCards: []
}