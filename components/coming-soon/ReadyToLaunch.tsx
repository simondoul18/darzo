"use client";
export default function ReadyToLaunch() {
    return (
        <>
            <h2>We’re getting ready to launch</h2>
            <p>We'll be here soon with our new awesome site, subscribe to be notified.</p>
            <div className="email-notify">
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-info">
                            <input type="text" className="form-control" placeholder="Enter your Email Address" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">Notify Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}