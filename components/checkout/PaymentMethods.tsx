"use client";

import { payment_card, powered_by_mollie_dark } from "@/storage/image";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import { Lock } from "react-feather";
import { useState } from "react";

export default function PaymentMethods() {

    let [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | 'mollie' | 'other'>('mollie');

    function changePaymentMethod(method: string | 'mollie' | 'other') {
        setSelectedPaymentMethod(method);
    }

    return (
        <>
            <div className="flex flex-col alert alert-primary">
                <div className="font-bold flex gap-2">End to end encrypted <Lock size={20} className="text-green-500" /></div>
                <div className="">All the payments are end to end encrypted and secure. We are using worlds top security protocols to make sure that our clients data is safe.</div>

                <div className="mt-4 flex justify-end gap-3">
                    <Image
                        src={powered_by_mollie_dark}
                        className="img-fluid"
                        alt=""
                        width={250}
                    />
                </div>
            </div>
            <h5 className="pay-title mt-6">Payment Methods</h5>
            <div className={`payment-card cursor-pointer select-none rounded-lg hover:shadow-lg transition duration-300 border ${selectedPaymentMethod == 'mollie' ? '!border-green-500' : ''}`} onClick={() => changePaymentMethod('mollie')}>
                <div className="payment-head">
                    <div className="payment-title w-full">
                        <div className="flex w-full">
                            <h6 className="my-auto">Pay Via Mollie</h6>
                            <div className="my-auto ml-auto badge badge-success flex gap-2">
                                <Lock className="text-green-500 my-auto" />
                                <div className="my-auto mt-2 text-[12pt] font-bold">Secure</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}