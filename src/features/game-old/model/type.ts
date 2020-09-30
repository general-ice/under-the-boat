import {CharacterRole} from "features/character/model/type";

export interface Game {
    id: string
    maxPlayer: number
    players: RegisteredPlayer[]
}

export interface RegisteredPlayer {
    id: string,
    displayedName?: string
    role: CharacterRole
}

export enum RegisterRejectReason {
    noFreePlace,
    roleEngaged
}

export interface RegistryPlayerInput {
    wantedRole: CharacterRole,
    existRoles: CharacterRole[]
    playersNumber: number
    maxPlayer: number
}