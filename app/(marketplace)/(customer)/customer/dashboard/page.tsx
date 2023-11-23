"use client"
import { dash_icon, down_icon, up_icon, wallet_add, wallet_amt, wallet_icon } from "@/storage/image";
import DashboardStatsWidget from "@/components/customers/dashboard/DashboardStatsWidget";
import RecentBooking from "@/components/customers/dashboard/RecentBooking";
import RecentTransactions from "@/components/customers/dashboard/RecentTransactions";
export default function CustomerDashboard() {
    return (
        <div className="col-md-8 col-lg-9">
            <div className="widget-title">
                <h4>Dashboard</h4>
            </div>
            {/* Dashboard Widget */}
            <div className="row">
                <DashboardStatsWidget title="Total Orders" counts={27} percentage={"+18.52%"} image={dash_icon} icon={up_icon} iconColor="yellow" />
                <DashboardStatsWidget title="Total Spend" counts={"$2500"} percentage={"+16.24%"} image={wallet_icon} icon={down_icon} iconColor="blue" statsClasses="text-danger" />
                <DashboardStatsWidget title="Wallet" counts={"$200"} percentage={"+12.24%"} image={wallet_add} icon={up_icon} iconColor="blue" />
                <DashboardStatsWidget title="Total Savings" counts={"$354"} percentage={"+12.24%"} image={wallet_amt} icon={up_icon} iconColor="light-danger" />
            </div>
            {/* /Dashboard Widget */}
            <div className="row">
                <RecentBooking />
                <RecentTransactions />
            </div>
        </div>
    )
}