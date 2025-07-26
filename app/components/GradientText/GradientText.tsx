import React from 'react'

const GradientText = ({ text, fontSize }: { text: string, fontSize?: number }) => {
    return (
        <div className={`text-[${fontSize}px] bg-clip-text text-transparent inline-block`}
            style={{ backgroundImage: 'linear-gradient(to right, #FFFFFF, #6BB0FF)', }}>
            {text}
        </div>
    )
}

export default GradientText