import React from 'react'
import './init'
import { GameCanvas } from 'features/game-process/game-canvas'
import { useGate } from 'effector-react'
import {AppGate} from "./features/app/model";
import {registerPlayer, startGame} from "./features/game/model";

const initScript = () => {
    const randomCharacter = () => Math.round(Math.random() * 4)
    // @ts-ignore
    const persons = Array.from(Array(5).keys()).map(randomCharacter)
    console.log(persons);
    persons.forEach(registerPlayer)
    // registerPlayer(1)
    // registerPlayer(2)
    // registerPlayer(3)
    // registerPlayer(4)
    startGame()
}

setTimeout(initScript, 1000)

export const App = () => {
    // Effector hook init
    useGate(AppGate)

    return <GameCanvas />
}