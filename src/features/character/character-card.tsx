import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {CharacterInGame} from "./model/type";
import Typography from '@material-ui/core/Typography';

interface Props {
    character: CharacterInGame
}

export const CharacterCard = ({character: {
    name,
    role,
    strength,
    health,
    debuffs
}}: Props) => {
    const classes = useStyle()

    return <Grid direction="column" className={classes.root}>
        <Grid spacing={1}>
            <Typography variant="h3">{name}</Typography>
        </Grid>
        <Grid spacing={1} justify="space-between" alignItems="center">
            <Typography variant="body1">Strength :</Typography>
            <Typography variant="body1">{strength}</Typography>
        </Grid>
        <Grid spacing={1} justify="space-between" alignItems="center">
            <Typography variant="body1">Health :</Typography>
            <Typography variant="body1">{health}</Typography>
        </Grid>
    </Grid>
}

const useStyle = makeStyles(_ => ({
    root: {border: '1px solid #cecece', borderRadius: 4, backgroundColor: '#fafafa'}
}))