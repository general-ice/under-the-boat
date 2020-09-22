import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {CharacterInGame} from "features/character/model/type";
import { CharacterCard } from 'features/character/character-card';
import {useStore} from "effector-react";
import {$gameProcess} from "./model";


export const BoatScheme = () => {
    const {players} = useStore($gameProcess)

    return <Grid container>
        {characterInRight.map((character) => <CharacterCard key={character.role} character={character}/>)}
    </Grid>
}

const useStyle = makeStyles(_ => ({
    root: {}
}))