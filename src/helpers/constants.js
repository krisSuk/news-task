export const TOP_STORIES = 'topstories.json?print=pretty';
export const STORY_BY_ID = (id) => `item/${id}.json?print=pretty`;
export const INTERNAL = (id) => `https://news.ycombinator.com/item?id=${id}`;
export const DATE = (time) => new Date(time * 1000).toLocaleDateString('cs-CZ');

export const TABLE_STYLE = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

export const COLUMNS = ['Name', 'Internal link', 'External link', 'Created on'];