import React from 'react'
import {GameArea, GamePlayer} from "./model/types";
import Grid from '@material-ui/core/Grid';
import {makeStyles, Theme} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import {OpenedEquipmentCard} from "../card/opened-equipment-card";
import {HiddenEquipmentCard} from "../card/hidden-equipment-card";

type Props = GamePlayer

export const PlayerPlace = ({cards, gameArea, id}: Props) => {
    const classes = useStyle({gameArea})

    return <Grid container direction="column" className={classes.root}>
        <Grid container justify="center">
            <Typography variant="h5">{`Player-${id}`}</Typography>
        </Grid>
        <Grid container direction="column">
            <Typography variant="body2">Opened cards</Typography>
            {cards.opened.map(card => <OpenedEquipmentCard key={card.id} {...card} />)}
        </Grid>
        <Grid container direction="column">
            <Typography variant="body2">Hidden cards</Typography>
            {cards.opened.map(card => <HiddenEquipmentCard key={card.id} />)}
        </Grid>
    </Grid>
}

// @ts-ignore
const useStyle = makeStyles<any, any, any>(_ => ({
    root: {
        border: '1px dashed lightblue',
        gridArea: ({gameArea}) => gameArea
    }
}))