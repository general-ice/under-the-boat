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
    debuffs?: CharacterDebuffs
}