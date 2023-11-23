"use client";
import MuiTable from "@/components/global/MUI/Tables/MuiTable";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import PaginatedTagsInterface from "@/interfaces/Tags/PaginatedTagInterface";
import TagInterface from "@/interfaces/Tags/TagInterface";
import TagService from "@/services/fetch/Tags/TagService";
import Checkbox from "@mui/joy/Checkbox";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Skeleton from "react-loading-skeleton";
import dynamic from "next/dynamic";

const TagsModal = dynamic(() => import("@/components/modals/tags/TagsModal"), { ssr: false });
const ResourceDeleteModal = dynamic(() => import("@/components/global/modals/delete/ResourceDeleteModal"), { ssr: false });

export default function TagsTable({ tagModalState, triggerTagModalHide, triggerTagModalShow }: { tagModalState?: boolean, triggerTagModalHide?: any, triggerTagModalShow?: any }) {
    useEffect(() => {
        fetchTagsWithPagination();
    }, []);

    let [tagsTableRefreshRequired, pokeTagsTableRefreshRequired] = useState<boolean>(false);
    let [tagToEdit, setTagToEdit] = useState<TagInterface | null>(null);

    //Delete Modal
    let [tagDeleteModalShown, setTagDeleteModalShown] = useState<boolean>(false);
    let [tagDeleteWarningMessage, setTagDeleteWarningMessage] = useState<string>('');
    let [deletedTagModel, setDeletedTagModel] = useState<any>(null);

    let [tableRows, setTableRows] = useState<any[]>();
    let [paginatedTags, setPaginatedTags] = useState<PaginatedTagsInterface | null>(null);
    let [perPageRows, setPerPageRows] = useState<number>(25);
    let [currentPage, setCurrentPage] = useState<number>(1);
    const [selected, setSelected] = useState<any>([]);
    const [orderDirection, setOrderDirection] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');

    function fetchTagsWithPagination(page: number = 1, perPage: number = 10) {
        let tagService = new TagService;
        tagService.fetchPaginatedTags({
            "perPage": perPage,
            "page": page
        }).then((response: AxiosResponse<OriginResponse<PaginatedTagsInterface>>) => {
            let tags: TagInterface[] | undefined = response.data.data?.data;

            setTableRows(tags ? tags.map((tag: TagInterface, i: any) => {
                return {
                    id: tag.id,
                    number: i + 1,
                    name: tag.name,
                    color: tag.color
                }
            }) : []);

            setPaginatedTags(response.data.data ? response.data.data : null);
        })
    }

    function perPageRowsChangeHandler(e: any, newValue: any) {
        setPerPageRows(newValue);
        fetchTagsWithPagination(currentPage, newValue);
    }

    function pageChangeHandler(pageNo: number) {
        if (paginatedTags?.last_page && pageNo <= paginatedTags?.last_page) {
            setCurrentPage(pageNo);
            fetchTagsWithPagination(pageNo, perPageRows);
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

    function showTagsModal() {
        triggerTagModalShow();
    }

    function hideTagsModal() {
        setTagToEdit(null);
        triggerTagModalHide();
    }

    function refreshSignal() {
        fetchTagsWithPagination(currentPage, perPageRows);
    }

    function editTag(tag: TagInterface) {
        setTagToEdit(tag);
        showTagsModal();
    }

    function showTagDeleteModal(tag: TagInterface) {
        setDeletedTagModel(tag);
        setTagDeleteWarningMessage('Do you want to delete "' + tag.name + '"');
        setTagDeleteModalShown(true);
    }

    function hideTagDeleteModal() {
        setTagDeleteModalShown(false);
    }

    function deleteTagHandler(tag: TagInterface) {
        if (tag && tag.id) {
            let tagService = new TagService;
            tagService.delete(tag.id).then((response: AxiosResponse<OriginResponse<TagInterface>>) => {
                fetchTagsWithPagination();
                hideTagDeleteModal();
            });
        }
    }


    const headCells = [
        {
            id: 'number',
            numeric: true,
            disablePadding: true,
            label: '#',
        },
        {
            id: 'name',
            numeric: false,
            disablePadding: false,
            label: 'Name',
        },
        {
            id: 'color',
            numeric: false,
            disablePadding: false,
            label: 'Color',
        },
        {
            id: 'action',
            numeric: false,
            disablePadding: false,
            label: 'Action',
        },
    ];


    return (
        <>
            <MuiTable headCells={headCells}
                rows={tableRows}
                perPageRows={perPageRows}
                rowsPerPageValueChangeHandler={perPageRowsChangeHandler}
                pageChangeHandler={pageChangeHandler}
                currentPage={currentPage}
                paginationParams={paginatedTags}
                selectedRows={selected}
                selectAllHandler={handleSelectAllRows}
                orderBy={orderBy}
                orderDirection={orderDirection}
                orderChangeHandler={handleRowsOrder}
                tableName="Tags"
            >
                {tableRows ? stableSort(tableRows, getComparator(orderDirection, orderBy))
                    .map((row: any, index: any) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <tr
                                key={index}
                                className="cursor-pointer"
                            >
                                <td scope="row">
                                    <Checkbox
                                        checked={isItemSelected}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleClick(event, row.id);
                                        }}
                                    />
                                </td>
                                <td id={labelId} className="" scope="row">
                                    <div className="font-semibold">{row.number}</div>
                                </td>


                                <td id={labelId} className="" scope="row">
                                    {row.name}
                                </td>


                                <td id={labelId} className="" scope="row">
                                    <div className="w-20 h-4 rounded" style={{
                                        backgroundColor: row.color
                                    }}>
                                    </div>
                                </td>


                                <td id={labelId} className="" scope="row">
                                    <div className="flex">
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Button size="sm" variant="plain" color="neutral" onClick={() => editTag(row)}>
                                                Edit
                                            </Button>
                                            <Button size="sm" variant="soft" color="danger" onClick={() => showTagDeleteModal(row)}>
                                                Delete
                                            </Button>
                                        </Box>
                                    </div>
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
                            </tr>
                        )
                    })}
            </MuiTable>
            {tagModalState && <TagsModal showModal={tagModalState} onHide={hideTagsModal} forceRefreshParentDataResources={refreshSignal} tag={tagToEdit} />}
            {tagDeleteModalShown && <ResourceDeleteModal deleteHandler={deleteTagHandler} showModal={tagDeleteModalShown} onHide={hideTagDeleteModal} deleteWarningMessage={tagDeleteWarningMessage} deleteResource="Tag" model={deletedTagModel} />}
        </>
    )
}