import React from "react";
import { BaseEquipmentCard } from "./base-card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const HiddenEquipmentCard = () => {
    return <BaseEquipmentCard>
        <Grid justify="center">
            <Typography variant="body1">Unknown card</Typography>
        </Grid>

    </BaseEquipmentCard>
}