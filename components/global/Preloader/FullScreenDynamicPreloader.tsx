"use client";

import { subscribe, unsubscribe } from "@/services/Events/EventsManager";
import { useEffect, useState } from "react";

export default function FullScreenDynamicPreloader() {

    let [showPreLoader, setShowPreLoader] = useState<boolean>(false);
    let [loaderMessage, setLoaderMessage] = useState<string>('');

    useEffect(() => {
        subscribe('show:fullScreenDynamicLoader', showPreloader);
        subscribe('dismiss:fullScreenDynamicLoader', dismissPreLoader);

        return () => {
            unsubscribe('show:fullScreenDynamicLoader', showPreloader);
            unsubscribe('dismiss:fullScreenDynamicLoader', dismissPreLoader);
        }
    }, []);

    function showPreloader(e: any) {
        setShowPreLoader(true);
        setLoaderMessage(e?.detail);
    }

    function dismissPreLoader(e: any) {
        setShowPreLoader(false);
        setLoaderMessage(e?.detail);
    }

    return (
        <div className={`fixed top-0 bottom-0 right-0 left-0 bg-gray-700 bg-opacity-10 z-[9999999] shadow ${showPreLoader ? 'flex flex-col justify-center items-center' : 'hidden'}`}>
            <div className="w-72 min-h-[200px] bg-white px-3 py-3 flex flex-col items-center justify-center rounded-lg">
                <div className="spinner-border text-primary w-12 h-12" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="flex flex-col mt-4 items-center">
                    <div className="font-semibold text-gray-700">We are getting it done!</div>
                    <div className="text-gray-700">{loaderMessage}</div>
                </div>
            </div>
        </div>
    );
}