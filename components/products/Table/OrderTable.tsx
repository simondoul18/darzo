"use client";

import MuiTable from "@/components/global/MUI/Tables/MuiTable";
import CustomerOrderInterface from "@/interfaces/CustommerOrders/CustomerOrder";
import PaginatedCustomerOrderInterface from "@/interfaces/CustommerOrders/PaginatedCustomerOrderInterface";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import ProducerOrderService from "@/services/fetch/Orders/ProducerOrders/ProducerOrderService";
import Checkbox from "@mui/joy/Checkbox";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function OrdersTable() {

    useEffect(() => {
        fetchOrdersWithPagination();
    }, [])

    let [tableKeys, setTableKeys] = useState<any[]>(['reference', 'name', 'amount', 'status', 'date']);
    let [tableRows, setTableRows] = useState<any[]>();
    let [paginatedOrders, setPaginatedOrders] = useState<PaginatedCustomerOrderInterface | null>(null);
    let [perPageRows, setPerPageRows] = useState<number>(25);
    let [currentPage, setCurrentPage] = useState<number>(25);
    const [selected, setSelected] = useState<any>([]);
    const [orderDirection, setOrderDirection] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');

    function fetchOrdersWithPagination(page: number = 1, perPage: number = 10) {
        let productService = new ProducerOrderService;
        productService.fetchPaginated({
            "include": "order_items,order_status",
            "perPage": perPage,
            "page": page
        }).then((response: AxiosResponse<OriginResponse<PaginatedCustomerOrderInterface>>) => {
            let orders: CustomerOrderInterface[] | undefined = response.data.data?.data;
            // setProducts(orders);
            setTableRows(orders ? orders.map((order: CustomerOrderInterface, i: any) => {
                return {
                    id: order.id,
                    reference: order.reference,
                    name: order.order_items[0].product?.name,
                    amount: (order?.order_items[0]?.product?.currency ? order?.order_items[0]?.product?.currency?.symbol : '$') + order?.order_items[0]?.price,
                    status: order.status.name,
                    date: order.created_at
                }
            }) : []);

            setPaginatedOrders(response.data.data ? response.data.data : null);
        })
    }

    function perPageRowsChangeHandler(e: any, newValue: any) {
        setPerPageRows(newValue);
        fetchOrdersWithPagination(currentPage, newValue);
    }

    function pageChangeHandler(pageNo: number) {
        if (paginatedOrders?.last_page && pageNo <= paginatedOrders?.last_page) {
            setCurrentPage(pageNo);
            fetchOrdersWithPagination(pageNo, perPageRows);
        }
    }

    function handleSelectAllRows(event: any) {
        if (event.target.checked) {
            const newSelected: any = tableRows ? tableRows.map((n) => n.id) : [];
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    }

    const handleClick = (event: any, name: any) => {
        const selectedIndex: any = selected.indexOf(name);
        let newSelected: any = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };



    const isSelected = (id: any) => selected?.indexOf(id) !== -1;

    function descendingComparator(a: any, b: any, orderBy: any) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order: any, orderBy: any) {
        return order === 'desc'
            ? (a: any, b: any) => descendingComparator(a, b, orderBy)
            : (a: any, b: any) => -descendingComparator(a, b, orderBy);
    }

    function stableSort(array: any, comparator: any) {
        const stabilizedThis = array.map((el: any, index: any) => [el, index]);
        stabilizedThis.sort((a: any, b: any) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });

        return stabilizedThis.map((el: any) => el[0]);
    }

    function handleRowsOrder(order: string, property: string) {
        setOrderDirection(order);
        setOrderBy(property);
    }


    const headCells = [
        {
            id: 'refrence',
            numeric: false,
            disablePadding: true,
            label: 'Ref#',
        },
        {
            id: 'name',
            numeric: false,
            disablePadding: false,
            label: 'Name',
        },
        {
            id: 'amount',
            numeric: false,
            disablePadding: false,
            label: 'Amount',
        },
        {
            id: 'status',
            numeric: false,
            disablePadding: false,
            label: 'Status',
        },
        {
            id: 'date',
            numeric: false,
            disablePadding: false,
            label: 'Date',
        },
    ];


    return (
        <MuiTable headCells={headCells}
            rows={tableRows}
            perPageRows={perPageRows}
            rowsPerPageValueChangeHandler={perPageRowsChangeHandler}
            pageChangeHandler={pageChangeHandler}
            currentPage={currentPage}
            paginationParams={paginatedOrders}
            selectedRows={selected}
            selectAllHandler={handleSelectAllRows}
            orderBy={orderBy}
            orderDirection={orderDirection}
            orderChangeHandler={handleRowsOrder}
            tableName="Orders"
        >
            {tableRows ? stableSort(tableRows, getComparator(orderDirection, orderBy))
                .map((row: any, index: any) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                        <tr
                            onClick={(event) => handleClick(event, row.id)}
                            key={index}
                            className="cursor-pointer"
                        >
                            <td scope="row">
                                <Checkbox
                                    checked={isItemSelected}
                                />
                            </td>

                            <td id={labelId}>
                                <div className="font-bold text-gray-700 text-base">{row.reference}</div>
                            </td>

                            <td id={labelId}>
                                <div className="w-96 truncate text-ellipsis">
                                    {row.name}
                                </div>
                            </td>

                            <td id={labelId}>
                                {row.amount}
                            </td>

                            <td id={labelId}>
                                {row.status}
                            </td>

                            <td id={labelId}>
                                {new Date(row.date).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: 'short',
                                    year: 'numeric',
                                })}
                            </td>
                        </tr>
                    );
                }) : [1, 2, 3].map((num: any) => {
                    return (
                        <tr key={num}>
                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>
                        </tr>
                    )
                })}
        </MuiTable>
    )
}