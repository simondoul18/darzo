"use client"
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { ArrowLeft, ArrowRight } from 'react-feather';
import HeadCellInterface from '@/interfaces/Table/HeadCell';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import Skeleton from 'react-loading-skeleton';
import PaginationInterface from '@/interfaces/Pagination/PaginationInterface';

export default function MuiTable({ tableName, headCells, rows, perPageRows, rowsPerPageValueChangeHandler, pageChangeHandler, currentPage, paginationParams, selectedRows, selectAllHandler, children, orderDirection, orderBy, orderChangeHandler }: { tableName?: string, headCells?: HeadCellInterface[], rows?: any[], perPageRows: number, rowsPerPageValueChangeHandler?: any, pageChangeHandler: any, currentPage: number, paginationParams?: PaginationInterface | null, selectedRows?: any[], selectAllHandler?: any, children: React.ReactNode, orderDirection: string, orderBy: string, orderChangeHandler: any }) {
    const handleRequestSort = (event: any, property: any) => {
        const isAsc = orderBy === property && orderDirection === 'asc';
        orderChangeHandler(isAsc ? 'desc' : 'asc', property);
    };

    function labelDisplayedRows({ from, to, count }: any) {
        return `${from ? from : 0}–${to ? to : 0} of ${count !== -1 ? count : `more than ${to}`}`;
    }

    return (
        <Sheet
            variant="outlined"
            sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm' }}
            className="table-responsive"
        >
            <EnhancedTableToolbar numSelected={selectedRows?.length} tableName={tableName} />
            <Table
                aria-labelledby="tableTitle"
                hoverRow
                sx={{
                    '--TableCell-headBackground': 'transparent',
                    '--TableCell-selectedBackground': (theme) =>
                        theme.vars.palette.success.softBg,
                    '& thead th:nth-of-type(1)': {
                        width: '40px',
                    }
                }}
                className="table-auto overflow-auto w-full whitespace-nowrap text-base table-fixed"
            >
                {headCells && headCells.length > 0 && <EnhancedTableHead
                    numSelected={selectedRows?.length}
                    order={orderDirection}
                    orderBy={orderBy}
                    onSelectAllClick={selectAllHandler}
                    onRequestSort={handleRequestSort}
                    rowCount={rows?.length}
                    headCells={headCells}
                />}
                <tbody>
                    {children}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={headCells ? headCells.length + 1 : 6}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    justifyContent: 'flex-end',
                                }}
                            >
                                {
                                    rows ? (
                                        <>
                                            <FormControl orientation="horizontal" size="sm">
                                                <FormLabel>Rows per page:</FormLabel>
                                                <Select onChange={rowsPerPageValueChangeHandler} value={perPageRows}>
                                                    <Option value={25}>25</Option>
                                                    <Option value={50}>50</Option>
                                                    <Option value={100}>100</Option>
                                                    <Option value={200}>200</Option>
                                                </Select>
                                            </FormControl>

                                            <Typography textAlign="center" sx={{ minWidth: 80 }}>
                                                {labelDisplayedRows({
                                                    from: paginationParams?.from,
                                                    to: paginationParams?.to,
                                                    count: paginationParams?.total ? paginationParams?.total : 0,
                                                })}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <IconButton
                                                    size="sm"
                                                    color="neutral"
                                                    variant="outlined"
                                                    disabled={currentPage === 1}
                                                    onClick={() => pageChangeHandler(currentPage - 1)}
                                                    sx={{ bgcolor: 'background.surface' }}
                                                >
                                                    <ArrowLeft />
                                                </IconButton>
                                                <IconButton
                                                    size="sm"
                                                    color="neutral"
                                                    variant="outlined"
                                                    disabled={
                                                        paginationParams && paginationParams.last_page && paginationParams.last_page <= currentPage ? true : false
                                                    }
                                                    onClick={() => pageChangeHandler(currentPage + 1)}
                                                    sx={{ bgcolor: 'background.surface' }}
                                                >
                                                    <ArrowRight />
                                                </IconButton>
                                            </Box>
                                        </>
                                    ) : (
                                        <div className="flex gap-4">
                                            <div className="w-32"><Skeleton /></div>
                                            <div className="w-20"><Skeleton /></div>
                                            <div className="w-28"><Skeleton /></div>
                                        </div>
                                    )}
                            </Box>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </Sheet>
    );
}