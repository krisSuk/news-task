import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { TABLE_STYLE, STORY_BY_ID, INTERNAL } from '../helpers/constants';
import Header from './Header';
import Body from './Body';
import dataFetcher from '../helpers/dataFetcher';
import Footer from './Footer';

class NewsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            ids: props.ids,
            records: [],
            rowsPerPage: 10,
            page: 0
        }
    }

    componentDidMount() {
        this.fetchRecords(this.cut(0, 10));
    }

    fetchRecords(recordIds) {
        const responses = recordIds.map(id => dataFetcher.get(STORY_BY_ID(id)));
        let records = [];
        Promise.all(responses).then(results => {
            results.forEach(res => {
                records.push({
                    id: res.data.id,
                    name: res.data.title,
                    score: res.data.score,
                    time: res.data.time,
                    url: res.data.url,
                    internal: INTERNAL(res.data.id)
                });
            });
            this.setState({ records: records });
        });
    }

    handleChangePage = (event, page) => {
        this.setState({ page: page });
        this.fetchRecords(this.cut(page, page + this.state.rowsPerPage));
    };

    handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value);
        this.setState({ page: 0, rowsPerPage: newRowsPerPage });
        this.fetchRecords(this.cut(0, newRowsPerPage));
    };

    cut = (from, to) => this.state.ids.slice(from, to);

    render() {
        const { classes, records, rowsPerPage, page } = this.state;
        if (records.length < 1) {
            return <div>NO DATA</div>
        }
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <Header />
                    <Body records={records} />
                    <Footer
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        count={this.state.ids.length}
                    />
                </Table>
            </Paper>
        );
    }
}

NewsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(TABLE_STYLE)(NewsTable);