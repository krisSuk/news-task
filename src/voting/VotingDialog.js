import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';


class VotingDialog extends Component {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleVote = () => {
        let raisedValue = this.props.selectedValue;
        raisedValue.score++;
        this.props.onClose(raisedValue, true);
    };

    render() {
        const { onClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title">Vote for the article</DialogTitle>
                <List>
                    <ListItem>
                        <ListItemText>Current score is {selectedValue.score}</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => this.handleVote()}>
                        <ListItemAvatar>
                            <Avatar>
                                <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="add vote" />
                    </ListItem>
                </List>
            </Dialog>
        );
    }
}

export default VotingDialog;