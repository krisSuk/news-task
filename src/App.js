import React, { Component } from 'react';
import NewsTable from './hacker-news-table/NewsTable';
import Typography from '@material-ui/core/Typography';
import dataFetcher from './helpers/dataFetcher';
import { TOP_STORIES } from './helpers/constants';
import Paper from '@material-ui/core/Paper';

class App extends Component {

  state = {}

  componentDidMount() {
    dataFetcher.get(TOP_STORIES)
      .then((response) => {
        this.setState({ ids: response.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Paper>
        <Typography variant="h6" gutterBottom>Hacker news table</Typography>
        {this.state.ids ? <NewsTable ids={this.state.ids} /> : <Typography variant="overline" gutterBottom>Not ready yet ...</Typography>}
      </Paper>
    );
  }
}

export default App;
