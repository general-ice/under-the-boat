import {$game, registerPlayer, registerPlayerFx, startGame} from ".";
import {forward, sample} from "effector";
import {RegisterRejectReason, RegistryPlayerInput} from "./type";
import { startGameProcess } from "features/game/model";

const generateId = () => Math.floor((Math.random() * 100)).toString()

$game.watch(console.log)

registerPlayerFx.use(({playersNumber, existRoles, wantedRole, maxPlayer}) => {
    if (playersNumber >= maxPlayer)
        throw RegisterRejectReason.noFreePlace

    if (existRoles.includes(wantedRole))
        throw RegisterRejectReason.roleEngaged

    return {
        role: wantedRole,
        id: generateId()
    }
})

sample({
    source: $game,
    clock: registerPlayer,
    fn: ({players, maxPlayer}, wantedRole): RegistryPlayerInput => ({
        maxPlayer,
        playersNumber: players.length,
        wantedRole,
        existRoles: players.map(p => p.role)
    }),
    target: registerPlayerFx
})

const startGameWithFollowPlayer = sample($game, startGame).map(({players}) => players)

forward({ from: startGameWithFollowPlayer, to: startGameProcess})

$game
    .on(registerPlayerFx.doneData, (state, player ) => ({
        ...state,
        players: [...state.players, player]
    }))

// @ts-ignore
window.registerPlayer = registerPlayer
// @ts-ignore
window.startGame = startGame