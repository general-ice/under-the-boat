import React from 'react'
import {BaseCharacterCard} from "./base-character-card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

interface Props {
    name: string
    isCurrentStep: boolean
}


export const CharacterMiniature = ({name, isCurrentStep}: Props) => {
    const classes = useStyle()

    return <BaseCharacterCard className={classes.root}>
        <Typography variant="body2">
            {name}
        </Typography>
        <Typography variant="subtitle2">
            {isCurrentStep && 'This person is stepping'}
        </Typography>
    </BaseCharacterCard>
}

const useStyle = makeStyles(_ => ({
    root: {
        width: 110,
        height: 130,
    },
}))