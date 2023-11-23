"use client"
import ConnectedApps from "@/components/customers/settings/ConnectedApps"
export default function ConnectedAppsSettings() {
    return (
        <div className="col-md-8 col-lg-9">
            <div className="widget-title">
                <h4>Connected Apps</h4>
            </div>
            <ConnectedApps />
        </div>
    )
}