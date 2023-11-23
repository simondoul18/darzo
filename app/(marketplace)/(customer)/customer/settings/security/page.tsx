"use client";
import ChangePassword from "@/components/customers/settings/security/ChangePassword";
import TwoFactorAuth from "@/components/customers/settings/security/TwoFactorAuth";
import PhoneVerification from "@/components/customers/settings/security/PhoneVerification";
import EmailVerification from "@/components/customers/settings/security/EmailVerification";
import DeviceManagement from "@/components/customers/settings/security/DeviceManagement";
import AccountActivity from "@/components/customers/settings/security/AccountActivity";
export default function SecuritySettings() {
    return (
        <div className="col-md-8 col-lg-9">
            <div className="widget-title">
                <h4>Security Settings</h4>
            </div>
            <ChangePassword />
            <TwoFactorAuth />
            <PhoneVerification />
            <EmailVerification />
            <DeviceManagement />
            <AccountActivity />
        </div>
    )
}