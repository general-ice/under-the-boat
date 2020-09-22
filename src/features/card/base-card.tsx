import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

export const BaseEquipmentCard: React.FC = ({children}) => {
    const classes = useStyle()

    return <Grid className={classes.root} spacing={1} container direction="column">
        {children}
    </Grid>
}

const useStyle = makeStyles(_ => ({
    root: {
        border: '1px solid #cecece',
        borderRadius: 4,
        backgroundColor: '#fafafa'
    }
}))