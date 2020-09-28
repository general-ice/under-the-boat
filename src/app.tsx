import React from 'react'
import './init'
import { GameCanvas } from 'features/game-process/game-canvas'
import { useGate } from 'effector-react'
import {AppGate} from "./features/app/model";
import {registerPlayer, startGame} from "./features/game/model";
import {$gameDistribution, $gameProcess, givePlayerEquipment} from "./features/game-process/model";
import {$equipments} from "./features/card/model";

const createSpecialPlayers = () => {
    // registerPlayer(1)
    // registerPlayer(2)
    // registerPlayer(3)
    // registerPlayer(4)
}

const giveStartedEquips = async () => {
    const equips = $equipments.getState().data

    const {players} = $gameProcess.getState()

    const mutualEquips = [...equips]

    const wait = () => new Promise(res => setTimeout(res, 1000))

    for await (const {id: playerId} of players) {
        const randomEquipNum = Math.round(Math.random() * mutualEquips.length)
        givePlayerEquipment({playerId, equip: mutualEquips[randomEquipNum]})
        mutualEquips.shift()
        await wait
    }

    console.log(equips);
}

const createRandomPlayers = () => {
    const randomCharacter = () => Math.round(Math.random() * 4)
    const persons = Array.from(Array(5).keys()).map(randomCharacter)
    persons.forEach(registerPlayer)
}

const initScript = () => {
    const actions = [createRandomPlayers, startGame, giveStartedEquips]

    actions.forEach(s => s())
}

setTimeout(initScript, 1000)

export const App = () => {
    // Effector hook init
    useGate(AppGate)

    return <GameCanvas />
}