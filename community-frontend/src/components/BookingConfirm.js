import React from 'react';
import '../css/panel.css';

const BookingConfirm = () => {

    return(
        <div className="booking-confirm panel">
        <h1>Congratulations!</h1>
        <h3>Your booking has been made:</h3>
        <p>Now you are ready to gaffer tape your project like Bob the Builder on a caffeine break.</p>
        <p>Please remember to bring any certification or training confirmation with you.</p>
        <img src='./thumb.png' alt="Safety First"></img>
        </div>
        )
}

export default BookingConfirm;