import {createEffect, createEvent, createStore} from "effector";
import {EquipmentCard, Equipments, RequestEquipmentsResponse} from "./type";
import './equips'

export const $equipments = createStore<Equipments>({
    data: [],
    loading: false
})

export const requestEquipments = createEvent()

export const requestEquipmentsFx = createEffect<void, EquipmentCard[]>()