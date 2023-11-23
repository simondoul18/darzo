"use client";
export default function AvailabilityWidget() {
    return (
        <div className="card card-available">
            <div className="card-body">
                <div className="available-widget">
                    <div className="available-info">
                        <h5>Delivery days</h5>
                        <ul>
                            <li>
                                Monday <span>9:30 AM - 7:00 PM</span>{" "}
                            </li>
                            <li>
                                Tuesday <span>9:30 AM - 7:00 PM</span>{" "}
                            </li>
                            <li>
                                Wednesday <span>9:30 AM - 7:00 PM</span>{" "}
                            </li>
                            <li>
                                Thursday <span>9:30 AM - 7:00 PM</span>{" "}
                            </li>
                            <li>
                                Friday <span>9:30 AM - 7:00 PM</span>{" "}
                            </li>
                            <li>
                                Saturday <span>9:30 AM - 7:00 PM</span>{" "}
                            </li>
                            <li>
                                Sunday <span className="text-danger">Closed</span>{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}