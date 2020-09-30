import {Character} from "features/character/model/type";
import {EquipmentCardId, EquipmentCard} from "features/card/model/type";

export type PlayerId = string

export enum PlayerStatus {
    active,
    connectionProblem
}

export enum PlayerPosition {
    topLeft = 'tl',
    topRight = 'tr',
    botLeft = 'bl',
    botRight = 'br'
}

interface AbstractPlayer {
    character: Character,
    cards: {},
    position: PlayerPosition
    status: PlayerStatus
    id: PlayerId
}

export interface Player extends AbstractPlayer{
    cards: {
        hidden: EquipmentCardId[],
        opened: EquipmentCard[]
    }
}

export interface MePlayer extends AbstractPlayer {
    cards: {
        hidden: EquipmentCard[],
        opened: EquipmentCard[]
    }
}