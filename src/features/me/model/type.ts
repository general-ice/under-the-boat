import {PlayerId} from "features/player/model/type";

export interface Me {
    playerId: Nullable<PlayerId>
    sessionId: Nullable<string>
}