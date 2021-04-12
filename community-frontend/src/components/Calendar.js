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

    const onSlotChange = function(slotInfo){
        window.alert("this is a new booking");
        let newBooking = {
        startDate: moment(slotInfo.start).format("YYYY/MM/DD"),
        endDate: moment(slotInfo.end).format("YYYY/MM/DD"),
        asset: asset,
        user: stateUser
        }
        setStateBooking(newBooking);
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
            `your booking deets ` +
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
                views={['month', 'day','agenda']}
                selectable
                action="click"
                onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
                events={asset.bookings}
                startAccessor="startDate"
                endAccessor="endDate"
                titleAccessor="${asset.name}"
                // allDayAccessor={true}
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
