import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import * as React from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import OrderCancelModal from '../OrderCancelModal/OrderCancelModal';

const MyOrders = () => {
    const [orders, setOrders] = React.useState([]);
    // modal states
    const [openCancellation, setOpenCancellation] = React.useState(false);
    const handleCancellationOpen = () => setOpenCancellation(true);
    const handleCancellationClose = () => setOpenCancellation(false);

    const { user } = useAuth();
    React.useEffect(() => {
        fetch(`https://intense-chamber-05246.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        
    }, [user.email]);
// table style
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            fontSize: 16,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    
    return (
        <Box>
            <Typography sx={{ textAlign: 'left', my:2 }} variant="h5" component="div" gutterBottom>
                My Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Manage Order</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <StyledTableRow key={order._id}>
                                <StyledTableCell component="th" scope="row">
                                    {order.productName}
                                </StyledTableCell>
                                <StyledTableCell align="center">${order.productPrice}</StyledTableCell>
                                <StyledTableCell align="center">{order.email}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button variant="contained" onClick={handleCancellationOpen}>Cancel</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <OrderCancelModal
                 orders={orders}
                openCancellation={openCancellation}
                setOpenCancellation={setOpenCancellation}
                handleCancellationClose={handleCancellationClose}
                setOrders={setOrders}
            >
            </OrderCancelModal>
        </Box>
    
    );
};

export default MyOrders;