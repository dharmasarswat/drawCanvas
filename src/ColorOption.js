import React from 'react';

const ColorOption = ({option, setOption}) => {
    const colors = ['#000000', '#fcba03', '#94fc03', '#03fcf0', '#0384fc', '#c203fc' , '#fc0362', '#fc0303']

    const handleClick = (e) => {
        setOption({...option, brushColor: e.target.id})
    }

    return (
        <React.Fragment>
            { colors.map((color, index)=>{
                return(<div 
                    id={color}
                    className={color === option.brushColor ? 'active box' : 'box'}
                    key={index} 
                    style={{ backgroundColor: color }}
                    onClick={handleClick}
                    ></div>)
            }) }
        </React.Fragment>
    
    )
}

export default ColorOption