import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

//using tooltip from bootstrap so when you hover over 'help' an info message appears explaining the rules.
export default function Info() {
    const renderTooltip = (props) => (
    <Tooltip {...props} className='tooltip'>
        Click on a letter to see if it's in the word. If not, it will be added to 'wrong letters'. If you guess wrong 6 times the game is over and you lose.
    </Tooltip>
    );

    return (
    <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
    <Button className='help-button'>Help</Button>
    </OverlayTrigger>
    );
}
