import React from 'react';
import '../css/panel.css';

const UserBookings = () => {

    const sessionUser = JSON.parse(window.sessionStorage.getItem("user"));

    // if (!user){
    //     return <p>Loading...</p>
    // }

    const bookingList = () => {
        let userBookings = [];

        sessionUser.bookings.map(booking => {
            console.log("can I access session user object")
            userBookings.push(booking)
        });


        return userBookings

    }

    const bookingNodes = () => {
        
        bookingList().map((booking) => { 
        return (
            <>
            <li key={booking.index}>{booking.id}</li>
            <li key={booking.index}>{booking.startDate}</li>
            </>
        )}
        )
    };

    return (
        <ul>
            {bookingNodes}
        </ul>
    )

}

export default UserBookings;