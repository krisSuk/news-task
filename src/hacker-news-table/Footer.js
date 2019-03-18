import React from 'react';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Pagination from './Pagination';

const Footer = (props) => {
    const { page, count, rowsPerPage } = props;
    return (<TableFooter>
        <TableRow>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                colSpan={3}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    native: true,
                }}
                onChangePage={props.onChangePage}
                onChangeRowsPerPage={props.onChangeRowsPerPage}
                ActionsComponent={Pagination}
            />
        </TableRow>
    </TableFooter>);
}

export default Footer;