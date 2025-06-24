import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../asset/style.css";

export default function BillingForm() {
    return (
        <div className="container my-5">
            <div className="row g-4">
                {/* Billing Address Card */}
                <div className="col-md-6 d-flex">
                    <div className="card h-100 w-100">
                        <div className="card-body">
                            <h2 className="title card-title mb-4">Billing Address</h2>
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-field form-label text-primary">
                                            First Name
                                        </label>
                                        <input type="text" className="form-input form-control" id="firstName" placeholder="Enter First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName" className="form-field form-label text-primary">
                                            Last Name
                                        </label>
                                        <input type="text" className="form-input form-control" id="lastName" placeholder="Enter Last Name" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="mobile" className="form-field form-label text-primary">
                                            Mobile No.
                                        </label>
                                        <input type="text" className="form-input form-control" id="mobile" placeholder="Enter Mobile No." />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="state" className="form-field form-label text-primary">
                                            State
                                        </label>
                                        <input type="text" className="form-input form-control" id="state" placeholder="Enter State Name" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="city" className="form-field form-label text-primary">
                                            City
                                        </label>
                                        <input type="text" className="form-input form-control" id="city" placeholder="Enter City Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="pinCode" className="form-field form-label text-primary">
                                            Pin Code
                                        </label>
                                        <input type="text" className="form-input form-control" id="pinCode" placeholder="Enter Pin Code" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="street" className="form-field form-label text-primary">
                                        Street Address
                                    </label>
                                    <input type="text" className="form-input form-control" id="street" placeholder="Enter Full Address" />
                                </div>

                                <button type="button" className="continue btn btn-primary w-100">
                                    Continue
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Coupon Code Card */}
                <div className="col-md-6 d-flex">
                    <div className="card h-100 w-100">
                        <div className="card-body">
                            <div className="total-payment d-flex justify-content-between mb-3">
                                <span className="subtotal text-muted">Subtotal</span>
                                <div>
                                    <span className="no-disc text-decoration-line-through text-muted me-2">$1194.00</span>
                                    <span className="rupees text-primary">$595.00</span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <span className="plan text-muted">Plan Discount -49.8%</span>
                                <span className="minus text-success">-$600.00</span>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <label className="form-label">Have a Coupon Code?</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="placeholderr form-control" placeholder="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
