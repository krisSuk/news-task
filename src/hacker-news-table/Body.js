import React, { PureComponent } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';
import VoteButton from '../voting/VoteButton';
import { DATE } from '../helpers/constants';
import VotingDialog from '../voting/VotingDialog';

class Body extends PureComponent {

    state = {
        open: false,
        votedFor: {
            id: -1,
            score: -1
        }
    }

    voteHandler = (rec, voteReceived) => {
        this.setState({ open: !this.state.open, votedFor: rec });
        if (voteReceived) {
            console.log(`Voted for article with id=${rec.id}, the score is now ${rec.score}.`);
        }
    }

    render() {
        return (
            <TableBody>
                {this.props.records.map(row => (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            <VoteButton vote={this.voteHandler} rec={{ id: row.id, score: row.score }} /> {row.name}
                        </TableCell>
                        <TableCell><a href={row.internal} alt="home"><Icon>home</Icon></a></TableCell>
                        <TableCell><a href={row.url} alt="open"><Icon>launch</Icon></a></TableCell>
                        <TableCell>{DATE(row.time)}</TableCell>
                    </TableRow>
                ))}
                <VotingDialog
                    selectedValue={this.state.votedFor}
                    open={this.state.open}
                    onClose={this.voteHandler} />
            </TableBody>);
    }
}
export default Body;