# Fast solution
 - Table components:    material-ui table with pagination 
 - Data fetcher:        axios instance
 - Voting components:   material-ui dialog

# Better solution
 - back end:     preload the ids and records on server (ex.: Node/Express)
 - db:           save votes in some db (ex.: Mongoose or FireBase)
 - front end:    use material ui virtualized table (virtual scroller should work faster without external api calls)
 - add unit/selenium tests

# Run
 - npm start