"use client";
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { useState } from 'react';


export default function ResourceDeleteModal({ showModal, onHide, deleteWarningMessage, deleteResource, deleteHandler, model }: { showModal?: any, onHide?: any, deleteWarningMessage?: string, deleteResource?: string, deleteHandler?: any, model: any }) {
    let [showDeleteButtonLoading, setShowDeleteButtonLoading] = useState<boolean>(false);
    return (
        <Modal open={showModal} onClose={onHide}>
            <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                    <WarningRoundedIcon />
                    Delete {deleteResource}
                </DialogTitle>
                <Divider />
                <DialogContent>
                    {deleteWarningMessage}
                </DialogContent>
                <DialogActions>
                    <Button variant="solid" color="danger" onClick={() => {
                        setShowDeleteButtonLoading(true);
                        deleteHandler(model);
                    }} loading={showDeleteButtonLoading}>
                        Delete {deleteResource}
                    </Button>
                    <Button variant="plain" color="neutral" onClick={onHide}>
                        Cancel
                    </Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}