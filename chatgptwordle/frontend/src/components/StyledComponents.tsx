import Box from '@mui/material/Box';

export const FlexBox = (props) => (
    <Box sx={{ display: 'flex' }}>
        {props.children}
    </Box>
);
