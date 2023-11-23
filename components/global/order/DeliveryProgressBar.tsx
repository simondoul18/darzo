"use client";

import "react-step-progress-bar/styles.css";
// @ts-ignore
import { ProgressBar, Step } from "react-step-progress-bar";
import { Box } from "react-feather";
import { useEffect, useState } from "react";

export default function DeliveryProgressBar({ items, currentSelectedItemId }: { items?: any[], currentSelectedItemId?: number }) {

    let [percentage, setPercentage] = useState<number>(0);


    useEffect(() => {
        if (items) {
            let total = items.length;
            let currentIndex = items.findIndex((item: any) => item.id == currentSelectedItemId);

            setPercentage((100 / total) * (currentIndex));

        }
    }, [items]);

    return (
        <ProgressBar
            percent={percentage}
            filledBackground="linear-gradient(90deg, rgba(12,131,48,1) 0%, rgba(19,247,101,1) 100%)"
        >
            <Step transition="scale">
                {({ accomplished }: { accomplished: any }) => (
                    <div className={`relative w-10 h-10 rounded-full flex justify-center items-center ${accomplished ? 'bg-green-500' : 'bg-gray-100'}`}>
                        <Box className={`${accomplished ? 'fill-green-500 text-white' : ''}`} />
                        <div className={`absolute text-nowrap text-sm bottom-10`}>Order started</div>
                    </div>
                )}
            </Step>

            {items && items.map((item, i) => {
                return (
                    <Step transition="scale" key={i}>
                        {({ accomplished }: { accomplished: any }) => (
                            <div className={`w-6 h-6 rounded-full  flex items-center justify-center relative ${accomplished ? 'bg-green-500' : 'border !border-green-500'}`}>
                                <div className={`w-2.5 h-2.5 rounded-full ${accomplished ? 'bg-white' : 'bg-green-500'}`}></div>
                                <div className={`absolute text-nowrap text-sm ${i % 2 == 0 ? 'top-6' : 'bottom-6'}`}>{item.name}</div>
                            </div>
                        )}
                    </Step>
                )
            })}
        </ProgressBar>
    );
}