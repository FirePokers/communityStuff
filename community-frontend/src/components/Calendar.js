import React, {Component} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AssetItem from './AssetItem';
import '../css/assetItem.css';

const localizer = momentLocalizer(moment);

const BookingCalendar = ({asset, tags}) => {

    // const bookingEvents = ({asset}) => {
    //     const eventNodes = asset.bookings.map((booking) => {
    //         return{
    //             startDate: new Date(booking.startDate),
    //             endDate: new Date(booking.endDate),
    //             title: "booking",
    //             allDay: true
    //         }
    // })
    // }

    return (
        <div className='booking-calendar-container'>
            <Calendar
                localizer={localizer}
                events={asset.bookings}
                startAccessor="start"
                endAccessor="end"
                style={{height: 500}}
            />
            <p>{asset.bookings.startDate}</p>
        </div>
        )
}

export default BookingCalendar;
