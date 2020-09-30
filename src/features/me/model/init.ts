import {forward} from "effector";
import {AppGate} from "features/app/model";
import { createSession, createSessionFx, $me } from ".";

forward({from: AppGate.open, to: createSessionFx})

createSessionFx
    .use(_ => ({playerId: 'player-id', sessionId: 'session-id'}))

$me
    .on(createSessionFx.doneData, (_, s) => s)

$me.watch(console.log)

