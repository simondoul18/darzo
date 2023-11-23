"use client"
export default function BookingNotificationSettings() {
    return (
        <div className="table-responsive">
            <table className="table mb-0">
                <thead className="table-thead">
                    <tr>
                        <th>Booking</th>
                        <th>Push</th>
                        <th>Email</th>
                        <th>SMS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <div className="notify-item">
                            <h6>Booking Request</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                        </td>
                        <td>
                        <div className="status-toggle status-tog">
                            <input type="checkbox" id="status_7" className="check" />
                            <label htmlFor="status_7" className="checktoggle">checkbox</label>
                        </div>
                        </td>
                        <td>
                        <div className="status-toggle status-tog">
                            <input type="checkbox" id="status_8" className="check" defaultChecked />
                            <label htmlFor="status_8" className="checktoggle">checkbox</label>
                        </div>
                        </td>
                        <td>
                        <div className="status-toggle status-tog">
                            <input type="checkbox" id="status_9" className="check" defaultChecked />
                            <label htmlFor="status_9" className="checktoggle">checkbox</label>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="notify-item">
                            <h6>Booking Status</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                        </td>
                        <td>
                        <div className="status-toggle status-tog">
                            <input type="checkbox" id="status_10" className="check" defaultChecked />
                            <label htmlFor="status_10" className="checktoggle">checkbox</label>
                        </div>
                        </td>
                        <td>
                        <div className="status-toggle status-tog">
                            <input type="checkbox" id="status_11" className="check" defaultChecked />
                            <label htmlFor="status_11" className="checktoggle">checkbox</label>
                        </div>
                        </td>
                        <td>
                        <div className="status-toggle status-tog">
                            <input type="checkbox" id="status_12" className="check" />
                            <label htmlFor="status_12" className="checktoggle">checkbox</label>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="notify-item">
                            <h6>Refund Request</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                        </td>
                        <td>
                        <div className="status-toggle status-tog">
                            <input type="checkbox" id="status_13" className="check" />
                            <label htmlFor="status_13" className="checktoggle">checkbox</label>
                        </div>
                        </td>
                        <td>
                        <div className="status-toggle status-tog">
                            <input type="checkbox" id="status_14" className="check" defaultChecked />
                            <label htmlFor="status_14" className="checktoggle">checkbox</label>
                        </div>
                        </td>
                        <td>
                        <div className="status-toggle status-tog">
                            <input type="checkbox" id="status_15" className="check" />
                            <label htmlFor="status_15" className="checktoggle">checkbox</label>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}