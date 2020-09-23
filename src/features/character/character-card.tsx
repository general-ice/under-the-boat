import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {CharacterInGame} from "./model/type";
import Typography from '@material-ui/core/Typography';
import {BaseCharacterCard} from "./base-character-card";

interface Props {
    character: CharacterInGame
    size?: 'small' | 'normal'
}

export const CharacterCard = (
    {
        character: {
            name,
            role,
            strength,
            health,
            debuffs,
            description
        },
        size = 'normal'
    }: Props) => {

    const classes = useStyle({isBig: size === "normal"})

    return <BaseCharacterCard className={classes.root}>
        <Grid container item spacing={1} >
            <Typography variant="h4">{name}</Typography>
        </Grid>
        <Grid container item justify="space-between" alignItems="center" className={classes.itemDescription}>
            <Typography variant="body1">Strength :</Typography>
            <Typography variant="body1">{strength}</Typography>
        </Grid>
        <Grid container item justify="space-between" alignItems="center" className={classes.itemDescription}>
            <Typography variant="body1">Health :</Typography>
            <Typography variant="body1">{health}</Typography>
        </Grid>
        <Grid container item direction="column" className={classes.itemDescription}>
            {/*<Typography variant="body1">Description :</Typography>*/}
            <Typography variant="body1">{description}</Typography>
        </Grid>
    </BaseCharacterCard>
}

const useStyle = makeStyles(_ => ({
    name: {
        marginBottom: 10
    },
    root: {
        width: 180,
        height: 240,
    },
    itemDescription: {
        margin: '2px 0'
    }
}))