export type EquipmentCardId = string

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

export interface AbstractEquipmentCard {
    id: EquipmentCardId
    type: EquipmentCardType
    description: string
}

export interface WeaponEquipmentCard extends AbstractEquipmentCard {
    type: EquipmentCardType.weapon
    power: number
}

export interface ResourceEquipmentCard extends AbstractEquipmentCard {
    type: EquipmentCardType.resource
    isPersistent: boolean
}

export interface TreasuresEquipmentCard extends AbstractEquipmentCard {
    type: EquipmentCardType.treasures
    value: number
}

export type EquipmentCard = WeaponEquipmentCard | ResourceEquipmentCard | TreasuresEquipmentCard