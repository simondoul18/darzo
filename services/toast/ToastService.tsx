"use client";
import { Id, TypeOptions, toast } from "react-toastify";

export default class ToastService {

    toastKeys: { id: Id, key: string, message: string }[] = [];



    inprogress(key: string, message: string) {
        const id = toast.loading(message);
        this.toastKeys.push({
            "id": id,
            "key": key,
            "message": message
        });
    }

    update(key: string, message: string, type: TypeOptions, isLoading: boolean = false) {
        let toastContext: { id: Id, key: string, message: string } | undefined = this.toastKeys.find((index: any) => {
            return index.key == key;
        });
        if (toastContext) {
            toast.update(toastContext.id, { render: message, type: type, isLoading: isLoading, autoClose: 5000, position: "top-right", closeButton: true, closeOnClick: true, pauseOnHover: true, draggable: true, theme: 'light' });
        }
    }
}