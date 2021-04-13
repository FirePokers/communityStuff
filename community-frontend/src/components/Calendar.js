import React, {Component, useState, useEffect} from 'react';
import {Calendar, Views, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AssetItem from './AssetItem';
import '../css/assetItem.css';


const BookingCalendar = ({asset, user, onCreate}) => {

    const [stateBooking, setStateBooking] = useState(null);

    const localizer = momentLocalizer(moment);

    useEffect(() => {
        if(stateBooking){
            console.log("what is happening here", stateBooking.asset);
        onCreate(stateBooking);
        }
    }, [stateBooking]);

    // const handleSelectEvent = event => {
    //     window.alert(
    //         `Your booking Details\nDate: ` +
    //         moment(event.startDate).format("DD/MM/YY")
    //     )
    // }

    const existingBookings = asset.bookings.map((booking, index) => {

        return {
            title: "Booked",
            start: booking.startDate,
            end: booking.endDate,
            allDay: true,
            resource: asset.name
        }


    })


    const onSlotChange = function(slotInfo){

        const newBookingStart = Date.parse(moment(slotInfo.start).format("YYYY/MM/DD"));
        const newBookingEnd = Date.parse(moment(slotInfo.end).format("YYYY/MM/DD"));


        let noOverlap = asset.bookings.every((booking) => {

            console.log("proposed start:", newBookingStart);
            console.log("proposed end:", newBookingEnd);

            let existingBookStart = Date.parse(moment(booking.startDate).format("YYYY/MM/DD"));
            let existingBookEnd = Date.parse(moment(booking.endDate).format("YYYY/MM/DD"));

            console.log("existing Start", existingBookStart);
            console.log("existing End", existingBookEnd);

            return newBookingStart > existingBookEnd || newBookingEnd < existingBookStart;
        })

        
        // console.log("format in booking: ", moment(asset.bookings[0].startDate).format("YYYY/MM/DD"));
        // console.log("format from calendar: ", moment(slotInfo.start).format("YYYY/MM/DD"));


        if(noOverlap){
            window.alert("this is a new booking");
            let newBooking = {
            startDate: moment(slotInfo.start).format("YYYY/MM/DD"),
            endDate: moment(slotInfo.end).format("YYYY/MM/DD"),
            asset: asset,
            user: user
            }
            setStateBooking(newBooking);
        } else 
        {
            return window.alert("aw shan times - already booked out")
        }
    }

    if(user){

    return (
        
            <div className='booking-calendar-container panel'>
                <Calendar
                localizer={localizer}
                events={existingBookings}
                startAccessor="start"
                endAccessor="end"
                action="click"
                views={['month']}
                selectable="ignoreEvents"
                style={{padding: 10}}
                onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
                />

            </div>


        );
    }
    else
    {
        return null;
    }


}

export default BookingCalendar;
