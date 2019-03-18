import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const VoteButton = (props) => {
    return (
        <IconButton color="primary" aria-label="vote" onClick={() => props.vote(props.rec)} >
            <Icon>star_rate</Icon>
        </IconButton>
    );
}

export default VoteButton;