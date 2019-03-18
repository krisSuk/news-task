import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { COLUMNS } from '../helpers/constants';

const Header = () => (
    <TableHead>
        <TableRow>
            {COLUMNS.map((col, index) => <TableCell key={index}>{col}</TableCell>)}
        </TableRow>
    </TableHead>
)

export default Header;