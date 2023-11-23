"use client"
import TransactionRow from '@/components/customers/dashboard/TransactionRow';
export default function RecentTransactions() {
    const n = 7;
    return (
        <div className="col-lg-4 d-flex flex-column">
            <h6 className="user-title">Recent Transaction</h6>
            <div className="table-responsive transaction-table flex-fill">
                <table className="table mb-0">
                    <tbody>
                        {[...Array(n)].map((value, i) => <TransactionRow key={i} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}