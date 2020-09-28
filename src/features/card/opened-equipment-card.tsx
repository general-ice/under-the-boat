import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { EquipmentCard, EquipmentCardType } from './model/type';
import {BaseEquipmentCard} from "./base-card";

const EquipCardTranspiler: Record<EquipmentCardType, string> = {
    [EquipmentCardType.treasures]: 'Treasures',
    [EquipmentCardType.resource]: 'Resource',
    [EquipmentCardType.weapon]: 'Weapon'
}

export const OpenedEquipmentCard = (card: EquipmentCard) => {
    const classes = useStyle()

    return <BaseEquipmentCard>
        <Grid>
            <Typography variant="h4">
                {EquipCardTranspiler[card.type]}
            </Typography>
        </Grid>
        <Grid>
            <Typography variant="body1">
                {card.description}
            </Typography>
        </Grid>
    </BaseEquipmentCard>
}

const useStyle = makeStyles(_ => ({
    root: {
    }
}))