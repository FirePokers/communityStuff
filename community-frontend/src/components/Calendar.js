import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

export default class BookingCalendar extends Component{

    localizer = BigCalendar.momentLocalizer(moment);

    setDates = () => {
        const events = []
        this.props.events.map(event => {
            return events.push({
                startDate: new Date(event.start),
                endDate: new Date(event.end),
                title: "booking",
                allDay: true
            })
        })
        return events
    }


    return(
        <div className='booking-calendar-container'>
            <BookingCalendar
                localizer={localizer}
                events={this.setDates()}
                startAccessor='start'
                endAccessor='end' />
        </div>
    )
}

export default BigCalendar;