import {CharacterRole, CharacterRoleKey, CharactersMap, RequestCharactersResponse} from "./type";
import {$characters, printCharacters, requestCharacters, requestCharactersFx} from ".";
import {forward} from "effector";
import {AppGate} from "features/app/model";
import {jsonRequest} from "lib/request";

forward({from: requestCharacters, to: requestCharactersFx})

requestCharactersFx
    .use(_ =>
        jsonRequest<RequestCharactersResponse>('/characters.json')
            .then(({data: characters}) =>
                characters.reduce<CharactersMap>((acc, character) => ({...acc, [character.role]: {...character}}), {} as CharactersMap))
    )

const characters: CharacterRoleKey[]  = ['captain', "boatsman", "cook", "lady", "shipBoy"]

printCharacters.watch(_ => {
    const characterObject = characters.reduce((acc, name) => ({...acc, [name]: CharacterRole[name]}), {})
    console.log(JSON.stringify(characterObject, undefined, 4))
})

forward({from: AppGate.open, to: requestCharactersFx})

$characters
    .on(requestCharactersFx.pending, (state, loading) => ({...state, isReady: loading}))
    .on(requestCharactersFx.doneData, (state, data) => ({...state, data}))

// @ts-ignore
window.printRoleInfo = printCharacters