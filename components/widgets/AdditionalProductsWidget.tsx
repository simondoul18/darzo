"use client";
import { service_09, service_16, service_07, service_03 } from "@/storage/image";
import Image from "next/image";
import { MapPin } from "react-feather";
export default function AdditionalProductsWidget() {
    return (
        <div className="package-widget pack-service">
            <h5>Additional Services</h5>
            <ul>
                <li>
                    <div className="add-serving">
                        <label className="custom_check">
                            <input type="checkbox" name="rememberme" />
                            <span className="checkmark" />
                        </label>
                        <div className="add-serv-item">
                            <div className="add-serv-img">
                                <Image
                                    src={service_09}
                                    alt=""
                                />
                            </div>
                            <div className="add-serv-info">
                                <h6>House Cleaning</h6>
                                <p>
                                    <i className="feather-map-pin" ><MapPin size={18} /></i> Alabama, USA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="add-serv-amt">
                        <h6>$500.75</h6>
                    </div>
                </li>
                <li>
                    <div className="add-serving">
                        <label className="custom_check">
                            <input type="checkbox" name="rememberme" />
                            <span className="checkmark" />
                        </label>
                        <div className="add-serv-item">
                            <div className="add-serv-img">
                                <Image
                                    src={service_16}
                                    alt=""
                                />
                            </div>
                            <div className="add-serv-info">
                                <h6>Air Conditioner Service</h6>
                                <p>
                                    <i className="feather-map-pin" ><MapPin size={18} /></i> Illinois, USA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="add-serv-amt">
                        <h6>$500.75</h6>
                    </div>
                </li>
                <li>
                    <div className="add-serving">
                        <label className="custom_check">
                            <input type="checkbox" name="rememberme" />
                            <span className="checkmark" />
                        </label>
                        <div className="add-serv-item">
                            <div className="add-serv-img">
                                <Image
                                    src={service_07}
                                    alt=""
                                />
                            </div>
                            <div className="add-serv-info">
                                <h6>Interior Designing</h6>
                                <p>
                                    <i className="feather-map-pin" ><MapPin size={18} /></i> California, USA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="add-serv-amt">
                        <h6>$500.75</h6>
                    </div>
                </li>
                <li>
                    <div className="add-serving">
                        <label className="custom_check">
                            <input type="checkbox" name="rememberme" />
                            <span className="checkmark" />
                        </label>
                        <div className="add-serv-item">
                            <div className="add-serv-img">
                                <Image
                                    src={service_03}
                                    alt=""
                                />
                            </div>
                            <div className="add-serv-info">
                                <h6>Wooden Carpentry Work</h6>
                                <p>
                                    <i className="feather-map-pin" ><MapPin size={18} /></i>Alabama, USA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="add-serv-amt">
                        <h6>$354.45</h6>
                    </div>
                </li>
            </ul>
        </div>
    )
}