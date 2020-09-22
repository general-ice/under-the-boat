import {EquipmentCard, EquipmentCardType} from "features/card/model/type";
import {Character, CharacterInGame, CharacterRole} from "features/character/model/type";

export enum GameStatus {
    pending,
    active,
    paused,
    finished
}

export enum GameArea {
    topLeft = 'topLeft',
    topRight = 'topRight',
    botLeft = 'botLeft',
    botRight = 'botRight',
    centerCard = 'centerCard',
    head = 'head'
}

export interface GameProcess {
    players: GamePlayer[],
    status: GameStatus
    stage: Nullable<number>
    whoStep: Nullable<string>
}

export interface GamePlayer {
    id: string
    character: CharacterInGame,
    cards: PlayerCards
    gameArea: GameArea,
    positionOnBoat: number
}

export interface PlayerCards {
    hidden: EquipmentCard[]
    opened: EquipmentCard[]
}