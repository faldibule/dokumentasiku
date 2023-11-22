import { Star } from '@mui/icons-material'
import { Box } from '@mui/material'
import { useState } from 'react'

const Background = ({ isDark }) => {
    return (
        <>
            {/* Background */}
            <Box sx={{
                height: '200%',
                width: '100%',
                transition: '0.5s',
                backgroundColor: isDark ? '#646975' : '#5470AB',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 2,
                left: isDark ? '45%' : '20%',
                top: '-50%',
            }} />
            <Box sx={{
                height: '200%',
                width: '100%',
                transition: '0.5s',
                backgroundColor: isDark ? '#4A5364' : '#7491BF',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: isDark ? 1 : 2,
                left: isDark ? '30%' : '-30%',
                top: '-50%',
            }} />
            <Box sx={{
                height: '200%',
                width: '100%',
                transition: '0.5s',
                backgroundColor: isDark ? '#272D3A' : '#89A2CB',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: isDark ? 0 : 2,
                left: isDark ? '0%' : '-50%',
                top: '-50%',
            }} />
        </>
    )
}
const Cloud1 = ({ isDark }) => {
    return (
        <>
            {/* cloud */}
            <Box sx={{
                height: '100%',
                width: '30%',
                backgroundColor: 'white',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 10,
                opacity: isDark ? 0 : 1,
                top: '40%',
                right: '-10%',
            }} />
            <Box sx={{
                height: '100%',
                width: '40%',
                backgroundColor: 'white',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 10,
                opacity: isDark ? 0 : 1,
                top: '60%',
                right: '-5%',
            }} />
            <Box sx={{
                height: '100%',
                width: '30%',
                backgroundColor: 'white',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 10,
                opacity: isDark ? 0 : 1,
                top: '80%',
                right: '20%',
            }} />
            <Box sx={{
                height: '100%',
                width: '40%',
                backgroundColor: 'white',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 10,
                opacity: isDark ? 0 : 1,
                top: '60%',
                right: '40%',
            }} />
            <Box sx={{
                height: '100%',
                width: '80%',
                backgroundColor: 'white',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 10,
                opacity: isDark ? 0 : 1,
                top: '80%',
                right: '40%',
            }} />
        </>
    )
}
const Cloud2 = ({ isDark }) => {
    return (
        <>
            {/* cloud */}
            <Box sx={{
                height: '100%',
                width: '30%',
                backgroundColor: '#B9C7E1',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 9,
                opacity: isDark ? 0 : 1,
                top: '20%',
                right: '-10%',
            }} />
            <Box sx={{
                height: '100%',
                width: '40%',
                backgroundColor: '#B9C7E1',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 9,
                opacity: isDark ? 0 : 1,
                top: '40%',
                right: '-5%',
            }} />
            <Box sx={{
                height: '100%',
                width: '30%',
                backgroundColor: '#B9C7E1',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 9,
                opacity: isDark ? 0 : 1,
                top: '60%',
                right: '20%',
            }} />
            <Box sx={{
                height: '100%',
                width: '40%',
                backgroundColor: '#B9C7E1',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 9,
                opacity: isDark ? 0 : 1,
                top: '40%',
                right: '40%',
            }} />
            <Box sx={{
                height: '100%',
                width: '80%',
                backgroundColor: '#B9C7E1',
                borderRadius: 25,
                position: 'absolute', 
                zIndex: 9,
                opacity: isDark ? 0 : 1,
                top: '80%',
                right: '40%',
            }} />
        </>
    )
}
const stars = [
    {
        color: 'white',
        fontSize: '20%',
        top: '20%',
        left: '10%',
    },
    {
        color: 'white',
        fontSize: '20%',
        top: '60%',
        left: '15%',
    },
    {
        color: 'white',
        fontSize: '20%',
        top: '80%',
        left: '35%',
    },
    {
        color: '#A0A7B5',
        fontSize: '20%',
        top: '20%',
        left: '35%',
    },
    {
        color: 'white',
        fontSize: '30%',
        top: '50%',
        left: '35%',
    },
    {
        color: 'white',
        fontSize: '20%',
        top: '85%',
        left: '60%',
    },
    {
        color: 'white',
        fontSize: '20%',
        top: '10%',
        left: '60%',
    },
    {
        color: 'white',
        fontSize: '20%',
        top: '50%',
        left: '50%',
    },
    

]
const StarsComponent = ({ isDark }) => {
    return (
        <>
        {stars.map((v, i) => {
            return (
                <Star 
                    sx={{
                        position: 'absolute',
                        zIndex: 888,
                        opacity: isDark ? 1 : 0,
                        ...v,
                    }}
                />
            )
        })}
        </>
    )
}
const ButtonMode = ({ isDark }) => {
    return (
        <>
            <Box 
                sx={{
                    position: 'absolute',
                    zIndex: 888,
                    width: '35%',
                    height: '70%',
                    bgcolor: isDark ? '#B4B4B4' : '#EBCB54',
                    borderRadius: 25,
                    transition: '0.5s',
                    transform: isDark ? 'translate(160%, 25%)' : 'translate(25%, 25%)'
                }} 
            >
                <Box 
                    sx={{
                        position: 'absolute',
                        zIndex: 999,
                        width: '15%',
                        height: '15%',
                        bgcolor: isDark ? '#A3A3A3' : 'inherit',
                        borderRadius: 25,
                        top: '20%', right: '20%',
                    }} 
                /> 
                <Box 
                    sx={{
                        position: 'absolute',
                        zIndex: 999,
                        width: '40%',
                        height: '40%',
                        bgcolor: isDark ? '#A3A3A3' : 'inherit',
                        borderRadius: 50,
                        top: '20%', right: '40%',
                    }} 
                /> 
                <Box 
                    sx={{
                        position: 'absolute',
                        zIndex: 999,
                        width: '20%',
                        height: '20%',
                        bgcolor: isDark ? '#A3A3A3' : 'inherit',
                        borderRadius: 25,
                        top: '60%', right: '25%',
                    }} 
                /> 
            </Box>
        </>
    )
}

const DarkmodeToggle = () => {
    const [isDark, setIsDark] = useState(false)
    const handleDark = () => setIsDark(!isDark)
    return (
        <Box onClick={handleDark} sx={{
            position: 'relative',
            cursor: 'pointer',
            width: 200,
            height: 100,
            bgcolor: 'red',
            borderRadius: 25,
            overflow: 'hidden',
            transition: '0.5s',
        }}>
            <Box sx={{
                width: '100%',
                height: '100%',
                borderRadius: 20,
                position: 'absolute',
                bottom: 0,
                transition: '0.5s'
            }}>
                <ButtonMode isDark={isDark} />
                <StarsComponent isDark={isDark} />
                <Cloud1 isDark={isDark} />
                <Cloud2 isDark={isDark} />
                <Background isDark={isDark} />
            </Box>
        </Box>
    )
}

export default DarkmodeToggle