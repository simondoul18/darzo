"use client"
import BookingRow from '@/components/customers/dashboard/BookingRow';
export default function RecentBooking() {
    const n = 7;
    return (
        <div className="col-lg-8 d-flex flex-column">
            <h6 className="user-title">Recent Booking</h6>
            <div className="table-responsive recent-booking flex-fill">
                <table className="table mb-0">
                    <tbody>
                        {[...Array(n)].map((value, i) => <BookingRow key={i} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}