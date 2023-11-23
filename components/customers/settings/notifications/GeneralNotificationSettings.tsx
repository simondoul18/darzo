"use client"
export default function GeneralNotificationSettings() {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="table-thead">
                    <tr>
                        <th>General Notifications</th>
                        <th>Push</th>
                        <th>Email</th>
                        <th>SMS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="notify-item">
                                <h6>General Notifications Newsletter</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </td>
                        <td>
                            <div className="status-toggle status-tog">
                                <input type="checkbox" id="status_1" className="check" defaultChecked />
                                <label htmlFor="status_1" className="checktoggle">checkbox</label>
                            </div>
                        </td>
                        <td>
                            <div className="status-toggle status-tog">
                                <input type="checkbox" id="status_2" className="check" defaultChecked />
                                <label htmlFor="status_2" className="checktoggle">checkbox</label>
                            </div>
                        </td>
                        <td>
                            <div className="status-toggle status-tog">
                                <input type="checkbox" id="status_3" className="check" defaultChecked />
                                <label htmlFor="status_3" className="checktoggle">checkbox</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="notify-item">
                                <h6>Daily Updates</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </td>
                        <td>
                            <div className="status-toggle status-tog">
                                <input type="checkbox" id="status_4" className="check" defaultChecked />
                                <label htmlFor="status_4" className="checktoggle">checkbox</label>
                            </div>
                        </td>
                        <td>
                            <div className="status-toggle status-tog">
                                <input type="checkbox" id="status_5" className="check" defaultChecked />
                                <label htmlFor="status_5" className="checktoggle">checkbox</label>
                            </div>
                        </td>
                        <td>
                            <div className="status-toggle status-tog">
                                <input type="checkbox" id="status_6" className="check" />
                                <label htmlFor="status_6" className="checktoggle">checkbox</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}