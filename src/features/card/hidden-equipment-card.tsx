import React from "react";
import { BaseEquipmentCard } from "./base-card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

export const HiddenEquipmentCard = () => {
    const classes = useStyle()

    return <BaseEquipmentCard className={classes.root}>
        <Grid container item justify="center">
            <Typography variant="body1">Unknown card</Typography>
        </Grid>

    </BaseEquipmentCard>
}

const useStyle = makeStyles(_ => ({
    root: {
        height: 100,
        width: 80
    }
}))