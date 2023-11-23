"use client";
export default function AddressInfo() {
    return (
        <>
            <h6 className="user-title">Address </h6>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="col-form-label">Address<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter your address" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="col-form-label">Country<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter your state" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="col-form-label">State<span className="text-danger">*</span></label>
                        <input type="email" className="form-control" placeholder="Enter your state" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="col-form-label">City<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter your city" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="col-form-label">Postal Code<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter your postal code" />
                    </div>
                </div>
            </div>
        </>
    )
}