import {$gameProcess, startGameProcess} from ".";
import {GameArea, GamePlayer, PlayerCards} from "./types";
import {CharacterInGame, CharacterRole} from "features/character/model/type";
import {Unit} from "effector";

$gameProcess.watch(console.log)

const PositionOnBoatPriority: Array<CharacterRole> = [
    CharacterRole.captain,
    CharacterRole.lady,
    CharacterRole.boatsman,
    CharacterRole.cook,
    CharacterRole.shipBoy
]

type ExistPlaceMap = Record<GameArea, boolean>

const allAvailablePositions: GameArea[] = [GameArea.botRight, GameArea.botLeft, GameArea.topRight, GameArea.topLeft]

const getRandomPosition = (existPositions: ExistPlaceMap): GameArea => {
    const freePlaces = allAvailablePositions.length - Object.keys(existPositions).length
    if (freePlaces === 1)
        return allAvailablePositions.filter(p => !existPositions[p])[0]
    while(true) {
        const potentialPosition = Math.floor(Math.random() * allAvailablePositions.length)
        const potentialPlace = allAvailablePositions[potentialPosition]

        if (!existPositions[potentialPlace])
            return potentialPlace
    }
}

$gameProcess
    .on(startGameProcess, (state, registeredPlayers) => {
        const existPositions = {} as ExistPlaceMap
        const players: GamePlayer[] = registeredPlayers.map(({displayedName, id, role}) => {
            const pos = getRandomPosition(existPositions)
            existPositions[pos] = true

            return {
                positionOnBoat: PositionOnBoatPriority.findIndex(r => r === role),
                id,
                cards: {
                    opened: [],
                    hidden: []
                },
                gameArea: pos
            }
        })

        return {
            ...state,
            players
        }
    })