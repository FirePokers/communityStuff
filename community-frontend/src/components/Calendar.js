import React, {Component} from 'react';
import {Calendar, Views, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AssetItem from './AssetItem';
import '../css/assetItem.css';

const localizer = momentLocalizer(moment);

const BookingCalendar = ({asset}) => {

    // const bookingEvents = ({asset}) => {
    //     const eventNodes = asset.bookings.map((booking) => {
    //         return {
    //             startDate: new Date (booking.startDate),
    //             endDate: new Date(booking.endDate),
    //             title: "booking",
    //             allDay: true
    //         }
    // })
    // }

    // const bookings = [
    //             {
    //                 startDate: "2021-04-08T17:24:48.316+00:00",
    //                 endDate: "2021-04-09T17:24:48.316+00:00",
    //                 id: "booking"
    //             }
    //         ]


    return (
        <div className='booking-calendar-container panel'>
            <Calendar
                localizer={localizer}
                selectable={true}
                step={1440}
                views={['month', 'day', 'agenda']}
                // onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo)}
                events={asset.bookings}
                startAccessor="startDate"
                endAccessor="endDate"
                titleAccessor="id"
                allDayAccessor={true}
                style={{
                    height: 300,
                    width: 300
                }}
            />
        </div>
        )
}

export default BookingCalendar;
