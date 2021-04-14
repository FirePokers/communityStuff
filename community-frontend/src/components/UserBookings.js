import React, {useState, useEffect} from 'react';
import Request from '../helpers/request';
import '../css/panel.css';
import '../css/userbookings.css';
import '../css/animation.css';

import BookingCalendar from './Calendar';

const UserBookings = ({deleteBooking}) => {
    const [allBookings, setAllBookings] = useState([]);
    const sessionUser = JSON.parse(window.sessionStorage.getItem("user"));
    const getBookings = () => {
    const request = new Request();
    request.get(`/api/bookings?user=${sessionUser.id}`)
    .then((data) => {setAllBookings(data)});
    }
    useEffect (() => {
        getBookings()
    }, []);
    const handleDeleteBooking = (booking) => {
        deleteBooking(booking);
      }
    if (!sessionUser){
        return <p>Loading...</p>
    }
   if (allBookings){
        const bookingNodes = allBookings.map((booking) => {
        return (
            <>
            <div className="user-booking-items">
                <span><strong>Booking ref: </strong>{booking.id}</span>
                <span><strong>Booking Date: </strong>{booking.startDate}</span>
                <span><strong>Item: </strong>{booking.asset.name}</span>
            </div>
                <div className="booking-button-container">
                    <button onClick={() => {handleDeleteBooking(booking)}} className="delete-button">Delete Booking</button>
                </div>
                </>
        )
        })
    return (
            <div className="generic-centre-row">
            <div className="user-booking-list panel in-from-top">
            
                    {bookingNodes}
                
            </div>
            </div>
        )
    }
}
export default UserBookings;