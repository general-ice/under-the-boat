import {CharacterRole} from "./type";
import { printCharacters } from ".";

type CharacterRoleName = keyof typeof CharacterRole

const characters: CharacterRoleName[]  = ['captain', "boatsman", "cook", "lady", "shipBoy"]

printCharacters.watch(_ => {
    const characterObject = characters.reduce((acc, name) => ({...acc, [name]: CharacterRole[name]}), {})
    console.log(JSON.stringify(characterObject, undefined, 4))
})

// @ts-ignore
window.printRoleInfo = printCharacters