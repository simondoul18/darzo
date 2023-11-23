"use client";

import { Box } from "react-feather";

export default function StatsWidget() {
    return (
        <div className="floating-five-main">
            <div className="floating-five-buttom">
                <div className="floating-five-buttom-all">
                    <h5>1430 k</h5>
                    <p>Total Products</p>
                </div>
                <div className="bg-main-tealish-900 w-14 h-14 rounded-full flex justify-center items-center text-white">
                    <Box size={28} />
                </div>
            </div>
            <div className="floating-five-buttom">
                <div className="floating-five-buttom-all">
                    <h5>2 k</h5>
                    <p>Total sellers</p>
                </div>
                <div className="bg-main-pink-900 w-14 h-14 rounded-full flex justify-center items-center text-white">
                    <Box size={28} />
                </div>
            </div>
        </div>
    )
}