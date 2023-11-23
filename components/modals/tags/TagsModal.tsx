"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from 'react-hook-form';
import TagService from '@/services/fetch/Tags/TagService';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import FormHelperText from '@mui/joy/FormHelperText';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import InputMain from "@/components/global/inputs/InputMain";
import TagInterface from "@/interfaces/Tags/TagInterface";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import TagResponseInterface from "@/interfaces/Tags/TagResponseInterface";
// import InfoOutlined from '@mui/icons-material/InfoOutlined';


export default function TagsModal({ showModal, onHide, forceRefreshParentDataResources, tag }: { showModal?: any, onHide?: any, forceRefreshParentDataResources?: any, tag?: TagInterface | null }) {
    useEffect(() => {
        initializeTagValues();
    }, []);

    let [showRequestLoaderForSaveTagButton, setShowRequestLoaderForSaveTagButton] = useState<boolean>(false);

    const loginValidation: any = Yup.object().shape({
        name: Yup.string().required('Tag name is required.'),
        color: Yup.string().nullable(),
    });

    const loginParams = { resolver: yupResolver(loginValidation) };
    const { register, handleSubmit, formState, setValue, getValues } = useForm(loginParams);
    const { errors } = formState;

    function handleTagSubmit(e: any) {
        setShowRequestLoaderForSaveTagButton(true);
        if (tag) {
            updateTag(e);
        } else {
            createTag(e);
        }
    }

    function createTag(e: any) {
        let tagService = new TagService;
        tagService.create(e).then((response: AxiosResponse) => {
            setShowRequestLoaderForSaveTagButton(false);
            forceRefreshParentDataResources();
            onHide();
        })
    }

    function updateTag(e: any) {
        if (tag && tag.id) {
            let tagService = new TagService;
            tagService.update(e, tag.id).then((response: AxiosResponse<OriginResponse<TagInterface>>) => {
                setShowRequestLoaderForSaveTagButton(false);
                forceRefreshParentDataResources();
                onHide();
            })
        }
    }

    function syncFormValues(e: any) {
        setValue(e.target.name, e.target.value);
    }

    function initializeTagValues() {
        if (tag) {
            setValue('name', tag.name);
            setValue('color', tag.color);
        }
    }

    return (
        <Modal open={showModal} onClose={onHide}>
            <ModalDialog>
                <DialogTitle>Create new tag</DialogTitle>
                <DialogContent>Fill in the information of the tag.</DialogContent>
                <form
                    onSubmit={handleSubmit(handleTagSubmit)}
                >
                    <Stack spacing={2}>
                        <FormControl error={errors.name ? true : false}>
                            <FormLabel>Name</FormLabel>
                            <Input autoFocus onChange={syncFormValues} slotProps={{ input: { 'name': 'name' } }} placeholder="Enter tag name" defaultValue={getValues(['name'])} />
                            <FormHelperText>
                                {/* @ts-ignore */}
                                {errors?.name?.message}
                            </FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Color</FormLabel>
                            <InputMain type="color" register={register('color')} />
                        </FormControl>
                        <Button type="submit" loading={showRequestLoaderForSaveTagButton}>Save tag</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    )
}