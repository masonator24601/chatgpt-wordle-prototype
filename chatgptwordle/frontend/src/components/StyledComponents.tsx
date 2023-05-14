import Box from '@mui/material/Box';

export const FlexBox = (props) => (
    <Box sx={{
        display: 'flex'
    }}>
        {props.children}
    </Box>
);

export const CenterBox = (props) => (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px'
    }}>
        {props.children}
    </Box>
)

export const EmptyWordleLetterBox = (props) => (
    <Box sx={{
          border: '2px solid gray',
          margin: '2px',
          fontSize: '2.5rem',
          fontWeight: 700,
          height: '3rem',
          width: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
          borderRadius: '2px'
    }}>
        {props.children}
    </Box>
)

export const GuessedWordleLetterBox = (props) => (
    <Box sx={{
          border: '2px solid gray',
          margin: '2px',
          fontSize: '2.5rem',
          fontWeight: 700,
          height: '3rem',
          width: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
          backgroundColor: 'gray',
          color: 'white',
          borderRadius: '2px'
    }}>
        {props.children}
    </Box>
)

export const CorrectWordleLetterBox = (props) => (
    <Box sx={{
          border: '2px solid green',
          margin: '2px',
          fontSize: '2.5rem',
          fontWeight: 700,
          height: '3rem',
          width: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
          backgroundColor: 'green',
          color: 'white',
          borderRadius: '2px'
    }}>
        {props.children}
    </Box>
)

export const AlmostWordleLetterBox = (props) => (
    <Box sx={{
          border: '2px solid rgb(201, 180, 88)',
          margin: '2px',
          fontSize: '2.5rem',
          fontWeight: 700,
          height: '3rem',
          width: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
          backgroundColor: 'rgb(201, 180, 88)',
          color: 'white',
          borderRadius: '2px'
    }}>
        {props.children}
    </Box>
)

export const WordleContainer = (props) => (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        {props.children}
    </Box>
)

export const DarkBox = (props) => (
    <Box sx={{
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '2px',
        width: '4rem',
        textAlign: 'center',
        padding: '5px 5px'
    }}>
        {props.children}
    </Box>
)