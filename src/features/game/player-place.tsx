import React from 'react'
import {GameArea, GamePlayer, GameProcess} from "./model/types";
import Grid from '@material-ui/core/Grid';
import {makeStyles, Theme} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import {OpenedEquipmentCard} from "../card/opened-equipment-card";
import {HiddenEquipmentCard} from "../card/hidden-equipment-card";
import {$characters} from "features/character/model";
import {createComponent, useStore} from 'effector-react';
import {CharacterCard} from "../character/character-card";
import { CharacterMiniature } from 'features/character/chraracter-miniature';
import {$gameProcess} from "./model";
import {CharacterRole, Characters} from "../character/model/type";

type Props = GamePlayer

const CharacterView = createComponent({p: $gameProcess, ch: $characters},
    ({role}: {role: CharacterRole}, {p: {whoStep}, ch: {data}}) =>
        <CharacterMiniature name={data[role].name} isCurrentStep={whoStep === role} />)

export const PlayerPlace = ({cards, gameArea, id, character}: Props) => {

    const classes = useStyle({gameArea})

    return <Grid container className={classes.root}>
        <Grid container justify="center">
            <Typography variant="h5">{`Player-${id}`}</Typography>
        </Grid>
        <CharacterView role={character} />
        <Grid container item direction="column">
            <Grid direction="column">
                <Typography variant="body2">Opened cards</Typography>
                {cards.opened.map(card => <OpenedEquipmentCard key={card.id} {...card} />)}
            </Grid>
            <Grid container direction="column">
                <Typography variant="body2">Hidden cards</Typography>
                {cards.hidden.map(card => <HiddenEquipmentCard key={card.id} />)}
            </Grid>
        </Grid>
    </Grid>
}

const useStyle = makeStyles<Theme, {gameArea: string}>(_ => ({
    root: {
        border: '1px dashed lightblue',
        gridArea: ({gameArea}) => gameArea
    }
}))