import React from "react";
import "../../asset/style.css";
import { Card, Form, Button } from "react-bootstrap";
import visa from '../../asset/Visa.png'
import netbanking from '../../asset/NetBanking.png';
import Mastercard from '../../asset/MasterCard.png';
import upi from '../../asset/UPI.png';

export default function NetBanking() {
    return (
        <div className="checkout-form min-vh-100 bg-light p-4">
            <div className="container">
                <div className="row g-4">
                    {/* Left Column */}
                    <div className="col-md-6">
                        <Card className="mb-4">
                            <div className="ms-3 mt-2">
                                <h5 className="text-primary">Billing Address</h5>
                            </div>
                            <div className="address">
                                <p className="text-name">Dheera Tech.</p>
                                <p className="text-name">
                                    205, Iscon Elegance SG Hwy Service Rd,
                                    <br />
                                    Prahlad Nagar, Ahmedabad, Gujarat 380015
                                </p>
                            </div>
                        </Card>

                        <Card>
                            <div className="ms-3 mt-2 ">
                                {/* <Card.Header> */}
                                <h5 className="text-primary">Payment</h5>
                                <p className="text-muted small">Instant Payment</p>
                            </div>
                            {/* </Card.Header> */}
                            <Card.Body>
                                <Form.Group>
                                    <div className="payment-option border p-3 mb-3 d-flex align-items-center justify-content-between">
                                        <Form.Label htmlFor="card" className="pay flex-grow-1 ml-2 mb-0">
                                            Card
                                        </Form.Label>
                                        <div className="payment-icons">
                                            <img src={visa} alt="Visa" className="payment-icon" />
                                            <img src={Mastercard} alt="Mastercard" className="payment-icon" />
                                        </div>
                                    </div>

                                    <div className="payment-option border p-3 mb-3 d-flex align-items-center justify-content-between">
                                        <Form.Label htmlFor="upi" className="pay flex-grow-1 ml-2 mb-0">
                                            UPI
                                        </Form.Label>
                                        <img src={upi} alt="UPI" className="payment-icon" />
                                    </div>

                                    <div className="payment-option border p-3 d-flex align-items-center justify-content-between">
                                        <Form.Label htmlFor="netbanking" className="pay flex-grow-1 ml-2 mb-0">
                                            Net Banking
                                        </Form.Label>
                                        <img src={netbanking} alt="Net Banking" className="netbanking payment-icon" />
                                    </div>
                                </Form.Group>

                            </Card.Body>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                        <Card>
                            <Card.Body>
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

                                <div className=" pt-3 mt-4">
                                    <div className="d-flex justify-content-between">
                                        <span className="total font-weight-bold">Total Pay</span>
                                        <span className="rupees font-weight-bold text-primary">$ 595.00</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
