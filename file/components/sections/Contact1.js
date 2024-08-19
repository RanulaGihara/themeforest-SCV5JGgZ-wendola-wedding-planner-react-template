import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Contact1 = () => {
    const [isOpen, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
        response: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            alert('RSVP submitted successfully!');
            setFormData({
                name: '',
                email: '',
                number: '',
                message: '',
                response: ''
            });
        } else {
            alert('Failed to submit RSVP');
        }
    };

    return (
        <>
            <section className="contact-section pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="form-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
                            <div className="inner-column">
                                <div className="icon-leave bounce-x"></div>
                                <div className="contact-form-one wow fadeInRight">
                                    <h6 className="title">Will you attend? </h6>

                                    <form onSubmit={handleSubmit} id="contact-form">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                                <div className="radio-box">
                                                    <label className="custom-radio-box-two">Accept with pleasure
                                                        <input
                                                            type="radio"
                                                            name="response"
                                                            value="Accept with pleasure"
                                                            onChange={handleChange}
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                                <div className="radio-box">
                                                    <label className="custom-radio-box-two">Decline with regret
                                                        <input
                                                            type="radio"
                                                            name="response"
                                                            value="Decline with regret"
                                                            onChange={handleChange}
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Complete Name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <input
                                                        type="text"
                                                        name="number"
                                                        placeholder="Number of Guests"
                                                        required
                                                        value={formData.number}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Notes"
                                                        required
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group col-lg-12">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form">
                                                    <span className="btn-title">Submit Now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="video-column col-lg-6 col-md-12 wow fadeInLeft">
                            <div className="inner-column">
                                <div className="video-box">
                                    <figure className="image"><img src="images/resource/contact1-1.jpg" alt=""/></figure>
                                    <a onClick={() => setOpen(true)} className="play-btn">
                                        <i className="icon fa fa-play" aria-hidden="true"></i>
                                    </a>
                                    <div className="icon-leaves-27 rotate-x"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};

export default Contact1;
