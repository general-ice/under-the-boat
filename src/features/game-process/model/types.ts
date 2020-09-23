import {EquipmentCard, EquipmentCardType} from "features/card/model/type";
import {Character, CharacterInGame, CharacterRole, Characters} from "features/character/model/type";

export enum GameStatus {
    pending,
    active,
    paused,
    finished
}

export interface GameDistribution {
    characters: CharacterInGame[]
    equipments: EquipmentCard[]
    navigationCards: []
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
    boatPositions: CharacterRole[]
    stage: Nullable<number>
    whoStep: Nullable<CharacterRole>
}

export interface GamePlayer {
    id: string
    character: CharacterRole,
    cards: PlayerCards
    gameArea: GameArea,
    positionOnBoat: number
}

export interface CardDistributionInputData {
    players: GamePlayer[],
    character: Characters
}

export interface PlayerCards {
    hidden: EquipmentCard[]
    opened: EquipmentCard[]
}

export interface GivePlayerEquip {
    playerId: string,
    equip: EquipmentCard
}

export interface RecomputePlayerCard {
    playerId: string
    cards: PlayerCards
}

export interface DistributeEquipment  {

}