import React from 'react';
import HeaderOne from './HeaderOne';
import { Box } from '@mui/material';

const LayoutOne = props => {
    const { children } = props

    return (
        <Box minWidth={ 320 }>
            <HeaderOne />

            <div>
                { children }
            </div>
        </Box>
    )
}

export default LayoutOne