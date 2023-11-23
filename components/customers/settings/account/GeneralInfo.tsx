"use client";
import { useState } from "react";
import Select from 'react-select'
// import SelectMain from "@/components/global/inputs/SelectMain";
export default function GeneralInfo() {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: "Select Gender", label: "Select Gender" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
    ];
    return (
        <>
            <h6 className="user-title">General Information</h6>
            <div className="general-info">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="Enter your first name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter Email Address" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Mobile Number</label>
                            <input type="text" className="form-control" placeholder="Enter Mobile Number" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Gender</label>
                            <Select
                                className="select"
                                defaultValue={selectedOption}
                                // @ts-ignore
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Date of birth</label>
                            <div className="form-icon">
                                <input type="text" className="form-control datetimepicker" placeholder="DD/MM/YYYY" />
                                <span className="cus-icon"><i className="feather-calendar" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="col-form-label d-block">Your Bio <span className="brief-bio float-end">Brief description for your profile. URLs are hyperlinked.</span></label>
                            <textarea className="form-control" rows={5} placeholder="Add a Short Bio....." defaultValue={""} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}