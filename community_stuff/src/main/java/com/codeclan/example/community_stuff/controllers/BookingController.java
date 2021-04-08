package com.codeclan.example.community_stuff.controllers;

import com.codeclan.example.community_stuff.models.Booking;
import com.codeclan.example.community_stuff.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "/bookings")
    public ResponseEntity<List<Booking>> getAllRaid() {
        return new ResponseEntity<List<Booking>>(bookingRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/bookings/{id}")
    public ResponseEntity getBookingById(@PathVariable Long id) {

        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }


}
