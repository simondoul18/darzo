"use client"
import GeneralNotificationSettings from "@/components/customers/settings/notifications/GeneralNotificationSettings"
import BookingNotificationSettings from "@/components/customers/settings/notifications/BookingNotificationSettings"
export default function NotificationsSettings() {
    return (
        <div className="col-md-8 col-lg-9">
            <div className="widget-title">
                <h4>Notifications</h4>
            </div>
            <div className="notification-table">
                <GeneralNotificationSettings />
                <BookingNotificationSettings />
            </div>
        </div>
    )
}