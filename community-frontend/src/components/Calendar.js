import React, {Component, useState} from 'react';
import {Calendar, Views, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AssetItem from './AssetItem';
import '../css/assetItem.css';

const localizer = momentLocalizer(moment);

const BookingCalendar = ({asset, user, onCreate}) => {

    const [stateBooking, setStateBooking] = useState(
        {
        startDate: "",
        endDate: "",
        asset: asset,
        user: user
        }
    )

    const onSlotChange = function(slotInfo, asset, user){
        window.alert("this is a new booking");
        let newBooking = {
        startDate: moment(slotInfo.start.toLocaleString()).format("yyyy-MM-dd"),
        endDate: moment(slotInfo.end.toLocaleString()).format("yyyy-MM-dd"),
        asset: {asset},
        user: {user}
        }
        console.log("what shows here", stateBooking);
        setStateBooking(newBooking);
        console.log("booking set to state:", stateBooking);
        onCreate(stateBooking);
    }

    const handleSelectEvent = event => {
        window.alert(
            `your booking deets ` +
            event.startDate +
            event.endDate +
            event.id
        )
    }


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
                selectable
                step={1440}
                views={['month', 'day','agenda']}
                onSelectSlot={(slotInfo, asset, user) => onSlotChange(slotInfo, asset, user)}
                events={asset.bookings}
                startAccessor="startDate"
                endAccessor="endDate"
                titleAccessor="userName"
                // allDayAccessor={true}
                onSelectEvent={handleSelectEvent}
                style={{
                    height: 300,
                    width: 300
                }}
            />
        </div>
        )
}

export default BookingCalendar;
