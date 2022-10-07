import { GithubPicker } from 'react-color';

import React, { useState, useEffect } from 'react';

const ColorPicker = ({ initialColor = { r: '255', g: '0', b: '0', a: '1', }, setColor }) => {
    const [state, setState] = useState({
        displayColorPicker: false,
        color: initialColor
    });

    useEffect(() => {
        if (setColor) {
            setColor(state.color)
        }
    }, [setColor, state.color])

    const handleClick = () => { setState({ ...state, displayColorPicker: !state.displayColorPicker }) }

    const handleClose = () => { setState({ ...state, displayColorPicker: false }) }

    const handleChange = (newColor) => { setState({ ...state, color: newColor.rgb }) }

    const styles = {
        color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`,
        },
        swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
        },
        popover: {
            position: 'absolute',
            zIndex: '2',
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },
    }

    return (
        <div>
            <div style={styles.swatch} onClick={handleClick}>
                <div style={styles.color} />
            </div>
            {
                state.displayColorPicker ?
                    <div style={styles.popover}>
                        <div style={styles.cover} onClick={handleClose} />
                        <GithubPicker color={state.color} onChange={handleChange} />
                    </div>
                    : null
            }
        </div>
    );
}

export default ColorPicker;