// import React, {Component} from 'react';
// import {Calendar, momentLocalizer} from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment';
// import Asset from './components/Asset'

// const localizer = momentLocalizer(moment);

// const BookingCalendar = () => {

//     const bookingEvents = ({asset}) => {
//         const events = []
//         const eventNodes = asset.bookings.map((booking) => {
//             return events.push({
//                 startDate: new Date(booking.startDate),
//                 endDate: new Date(booking.endDate),
//                 title: "booking",
//                 allDay: true
//             })
//         })
//         return events
//     }


//         return (
//         <div className='booking-calendar-container'>
//             <Calendar
//                 localizer={localizer}
//                 events={bookingEvents()}
//                 startAccessor="start"
//                 endAccessor="end"
//                 style={{height: 500}}
//             />
//         </div>
//         )
//     }

// export default BookingCalendar;
