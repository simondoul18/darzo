"use client"
import BackNavigation from "@/components/global/BackNavigation/BackNavigation";
import ButtonMain from "@/components/global/buttons/ButtonMain";
import TagsTable from "@/components/products/Table/Tags/TagsTable";
import TagInterface from "@/interfaces/Tags/TagInterface";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export default function TagsPage() {
    let [showLoaderForAddTagButton, setshowLoaderForAddTagButton] = useState<boolean>(false);
    let [tagModalShown, setTagModalShown] = useState<boolean>(false);

    function showTagsModal() {
        setshowLoaderForAddTagButton(true);
        setTagModalShown(true);
    }

    function hideTagModal() {
        setshowLoaderForAddTagButton(false);
        setTagModalShown(false);
    }

    return (
        <div className="container flex flex-col">
            <div className="flex">
                <BackNavigation title="Tags" backText="Go back" />
                <div className="ml-auto">
                    <ButtonMain text="Add new tag" scheme="btn-primary" showLoaderOnRequest={showLoaderForAddTagButton} click={showTagsModal} />
                </div>
            </div>

            <div className="mt-12">
                <TagsTable tagModalState={tagModalShown} triggerTagModalShow={showTagsModal} triggerTagModalHide={hideTagModal} />
            </div>
        </div>
    )
}