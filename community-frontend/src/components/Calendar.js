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
            if (window.confirm("Press OK to book!")) {
                let newBooking = {
                startDate: moment(slotInfo.start).format("YYYY/MM/DD"),
                endDate: moment(slotInfo.end).format("YYYY/MM/DD"),
                title: "booking",
                asset: asset,
                user: stateUser
                }
                setStateBooking(newBooking);
            } else {
                window.txt = "You pressed Cancel!";
            }
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
            `Your booking Details\nDate: ` +
            moment(event.startDate).format("DD/MM/YY") +
            `\nBooking Reference: ` +
            event.id
        )
    }

    if(user){
    return (
        <div className='booking-calendar-container panel'>
            <Calendar
                localizer={localizer}
                step={1440}
                views={['month', 'day', 'agenda']}
                selectable="ignoreEvents"
                action="select"
                onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
                events={formattedBookings}
                startAccessor="startDate"
                endAccessor="endDate"
                titleAccessor="title"
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
