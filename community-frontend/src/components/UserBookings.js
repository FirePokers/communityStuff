import React, {useState, useEffect} from 'react';
import Request from '../helpers/request';
import '../css/panel.css';
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
            <div className="user-booking-items">
            <li><strong>Booking ref: </strong>{booking.id}</li>
            <li><strong>Item: </strong>{booking.asset.name}</li>
            <button onClick={() => {handleDeleteBooking(booking)}}>Delete Booking</button>
            </div>
        )
        })

    return (
            <div className="user-booking-list panel">
                <ul>
                    {bookingNodes}
                </ul>
            </div>
        )
    }
}

export default UserBookings;