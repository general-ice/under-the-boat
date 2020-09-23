export type CharacterRoleKey = keyof typeof CharacterRole
export type CharactersMap = Record<CharacterRole, Character>

export interface Characters {
    data: CharactersMap
    loading: boolean
}

export interface RequestCharactersResponse {
    data: Character[]
}

export enum CharacterRole {
    captain,
    boatsman,
    lady,
    cook,
    shipBoy
}

export interface Character {
    role: CharacterRole,
    name: string
    description: string,
    strength: number
    valueMultiplier?: number
    basePosition: number
}

interface CharacterDebuffs {
    thirst: boolean
}

export interface CharacterInGame extends Character {
    damageReceived?: number
    health: number
    debuffs: Nullable<CharacterDebuffs>
}