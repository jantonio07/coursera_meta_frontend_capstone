import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const onDateChange = (value) => {
        setDate(value);
        props.dispatch(value);
    };

    const onTimeChange = (value) => {
        setTime(value);
        props.dispatch(value);
    };

    const onGuestsChange = (value) => {
        setGuests(value);
        props.dispatch(value);
    };

    return (
        <header>
            <section>
                <form onSubmit={onSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => onDateChange(e.target.value)} type='date' required/>
                        </div>
                        <div>
                            <label htmlFor='book-time'>Choose Time</label>
                            <select id='book-time' value={time} onChange={(e) => onTimeChange(e.target.value)} required> 
                                <option value=''>Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                        return <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor='book-guests'>Number of Guests</label>
                            <input id='book-guests' type='number' min='1' value={guests} onChange={(e) => onGuestsChange(e.target.value)} required/>
                        </div>
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={'Make Reservation'}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;