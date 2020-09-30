import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import {createComponent, useStore} from "effector-react";
import { GameArea, GameStatus } from './model/types';
import {$gameProcess} from "./model";
import {PlayerPlace} from "./player-place";
import { BoatScheme } from './boat-scheme';

const displayedStatusConfig: Record<GameStatus, string> = {
    [GameStatus.active]: 'Game is active',
    [GameStatus.pending]: 'Pending other players',
    [GameStatus.paused]: 'Pause',
    [GameStatus.finished]: 'Game finish'
}

const GameStatusRow = createComponent($gameProcess, (_, {status}) => {
    const classes = useStyle()
    return <Grid container justify="center" className={classes.head}>
        <Typography variant="h3">Game status: {displayedStatusConfig[status]}</Typography>
    </Grid>
})

export const GameCanvas = () => {
    const {players} = useStore($gameProcess)
    const classes = useStyle()

    const Players = players.map(player => <PlayerPlace key={player.id} {...player} />)

    return <Grid container direction="column" className={classes.root}>
        <GameStatusRow />
        <Grid container item className={classes.grid}>
            {Players}
            <Grid container item className={classes.mainCard} alignItems="center">
                <BoatScheme />
            </Grid>
        </Grid>
    </Grid>
}

const useStyle = makeStyles(_ => ({
    grid: {
        display: 'grid',
        gridGap: '10px',
        padding: '10px',
        height: 'calc(100% - 60px)',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridTemplateAreas: `
            "${GameArea.topLeft} . ${GameArea.topRight}"
            "${GameArea.centerCard} ${GameArea.centerCard} ${GameArea.centerCard}"
            "${GameArea.botLeft} . ${GameArea.botRight}"
        `
    },
    root: {
        height: '100%',
    },
    head: {
        height: '60px',
    },
    mainCard: {gridArea: GameArea.centerCard}
}))