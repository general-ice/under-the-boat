export interface Equipments {
    data: EquipmentCard[]
    loading: boolean
}

export interface RequestEquipmentsResponse {
    data: EquipmentCard[]
}

export enum EquipmentCardType {
    weapon,
    treasures,
    resource
}

export interface BaseEquipmentCard {
    id: string
    type: EquipmentCardType
    description: string
}

export interface WeaponEquipmentCard extends BaseEquipmentCard {
    type: EquipmentCardType.weapon
    power: number
}

export interface ResourceEquipmentCard extends BaseEquipmentCard {
    type: EquipmentCardType.resource
    isPersistent: boolean
}

export interface TreasuresEquipmentCard extends BaseEquipmentCard {
    type: EquipmentCardType.treasures
    value: number
}

export type EquipmentCard = WeaponEquipmentCard | ResourceEquipmentCard | TreasuresEquipmentCard