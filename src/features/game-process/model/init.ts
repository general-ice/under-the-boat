import {
    $gameProcess,
    computeBasicPlayerFx,
    startGameProcess,
    startCardDistributionFx,
    $gameDistribution,
    startDistribution, startDistributeEquipmentFx, givePlayerEquipment, recomputePlayerCards, distributeInitialEquipment
} from ".";
import {GameArea, GamePlayer, GameStatus} from "./types";
import {Character, CharacterInGame, CharacterRole} from "features/character/model/type";
import {combine, createEffect, createStore, forward, guard, sample} from "effector";
import {$characters} from "features/character/model";

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
        const potentialPosition = Math.round(Math.random() * allAvailablePositions.length)
        const potentialPlace = allAvailablePositions[potentialPosition]

        if (!existPositions[potentialPlace])
            return potentialPlace
    }
}

sample({
    source: {character: $characters, game: $gameProcess},
    clock: startDistribution,
    fn: ({character, game: {players}}) => ({character, players}),
    target: startCardDistributionFx
})

startCardDistributionFx
    .use(({character: {data}, players}) => {
        const playCharacters = players
            .map(({character}) => character)
            .sort((ch1, ch2) => data[ch1].basePosition > data[ch2].basePosition ? 1 : -1)
            .map<CharacterInGame>(role => ({
                ...data[role],
                health: data[role].strength,
                debuffs: null,
                damageReceived: 0
            }) )

        return {
            characters: playCharacters,
            equipments: [],
            navigationCards: []
        }
    })



forward({from: startGameProcess, to: computeBasicPlayerFx})

computeBasicPlayerFx
    .use(registeredPlayers => {
        const existPositions = {} as ExistPlaceMap

        return registeredPlayers.map(({displayedName, id, role}) => {
            const pos = getRandomPosition(existPositions)
            existPositions[pos] = true

            return {
                positionOnBoat: PositionOnBoatPriority.findIndex(r => r === role),
                id,
                cards: {
                    opened: [],
                    hidden: []
                },
                character: role,
                gameArea: pos
            }
        })
    })

forward({from: computeBasicPlayerFx.doneData, to: startDistribution})

sample({
    source: $gameProcess,
    clock: givePlayerEquipment,
    fn: ({players}, {playerId, equip}) => {
        const [{cards: {opened, hidden}}] = players.filter(p => p.id === playerId)
        return {
            playerId,
            cards: {
                opened,
                hidden: [...hidden, equip]
            }
        }
    },
    target: recomputePlayerCards
})

$gameDistribution
    .on(startCardDistributionFx.doneData, (_, newState) => newState)
    .on(givePlayerEquipment, (state, {equip: {id}}) => ({...state, equipments: state.equipments.filter(e => e.id !== id)}))

$gameProcess
    .on(recomputePlayerCards, (state, {playerId, cards}) => ({
        ...state,
        players: state.players.map(player => player.id !== playerId ? player : {...player, cards})
    }))
    .on(computeBasicPlayerFx.doneData, (state, players) => ({
        ...state,
        status: GameStatus.active,
        players
    }))