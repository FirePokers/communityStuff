import React, {Component, useState, useEffect} from 'react';
import {Calendar, Views, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AssetItem from './AssetItem';
import '../css/assetItem.css';

const localizer = momentLocalizer(moment);

const BookingCalendar = ({asset, user, onCreate}) => {

    const [stateBooking, setStateBooking] = useState(null);
    const [stateUser, setStateUser] = useState(null);

    const formattedBookings = asset.bookings.map((booking) => {
        console.log("booking", booking);
        const copiedBooking = { ...booking };
        const splitStartDate = booking.startDate.split("/");
        const splitEndDate = booking.endDate.split("/");
        copiedBooking.startDate = new Date(
          splitStartDate[0],
          splitStartDate[1]-1,
          splitStartDate[2]
        );
        copiedBooking.endDate = new Date(
          splitEndDate[0],
          splitEndDate[1]-1,
          splitEndDate[2]
        );
        console.log("copy", copiedBooking);
        return copiedBooking;
      });

    const onSlotChange = function(slotInfo){
        // if(asset.bookings){
        window.alert("this is a new booking");
        let newBooking = {
        startDate: moment(slotInfo.start).format("YYYY/MM/DD"),
        endDate: moment(slotInfo.end).format("YYYY/MM/DD"),
        asset: asset,
        user: stateUser
        }
        setStateBooking(newBooking);
    // } else {
    //     return window.alert("aw shan times - already booked out")
    // }
    }

    useEffect(() => {
        setStateUser(user)   
    }, [user]);

    useEffect(() => {
        if(stateBooking){
            console.log("what is happening here", stateBooking.asset);
        onCreate(stateBooking);
        }
    }, [stateBooking]);

    const handleSelectEvent = event => {
        window.alert(
            `Your Booking Details `+
             event.startDate +
            event.endDate +
            event.id
        )
    }

    if(user){
    return (
        <div className='booking-calendar-container panel'>
            <Calendar
                localizer={localizer}
                step={1440}
                views={['month','day','agenda']}
                selectable="ignoreEvents"
                action="click"
                onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
                events={formattedBookings}
                startAccessor="startDate"
                endAccessor="endDate"
                titleAccessor="id"
                allDayAccessor="true"
                onSelectEvent={handleSelectEvent}
                style={{
                    height: 300,
                    width: 300
                }}
            />
        </div>
        )
    } else {
        return null
    };
}

export default BookingCalendar;
