import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { CharacterCard } from 'features/character/character-card';
import {useStore} from "effector-react";
import {$gameDistribution} from "./model";


export const BoatScheme = () => {
    const {characters, navigationCards} = useStore($gameDistribution)
    const classes = useStyle()

    return <Grid container className={classes.root}>
        {characters.map((character) => <CharacterCard key={character.role} character={character}/>)}
    </Grid>
}

const useStyle = makeStyles(_ => ({
    root: { padding: 1}
}))