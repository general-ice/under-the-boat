import {forward} from "effector";
import {$equipments, requestEquipments, requestEquipmentsFx} from ".";
import { jsonRequest } from "lib/request";
import {RequestEquipmentsResponse} from "./type";
import {AppGate} from "features/app/model";

// forward({from: requestEquipments, to: requestEquipmentsFx})

forward({from: AppGate.open, to: requestEquipmentsFx})

requestEquipmentsFx
    .use(_ => jsonRequest<RequestEquipmentsResponse>('/equipments.json')
        .then(r => r.data)
    )

$equipments
    .on(requestEquipmentsFx.doneData, (state, data) => ({...state, data}))
    .on(requestEquipmentsFx.pending, (state, loading) => ({...state, loading}))