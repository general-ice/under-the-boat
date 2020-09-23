import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    className: string
}

export const BaseCharacterCard: React.FC<Props> = ({children, className}) => {
    const classes = useStyle()

    return <Grid container direction="column" className={[classes.root, className].join(' ')}  wrap="nowrap" alignItems="center">
        {children}
    </Grid>
}

const useStyle = makeStyles(_ => ({
    root: {
        border: '1px solid #cecece',
        borderRadius: 4,
        margin: '0px 8px',
        padding: 12,
        backgroundColor: '#fafafa'
    },
}))