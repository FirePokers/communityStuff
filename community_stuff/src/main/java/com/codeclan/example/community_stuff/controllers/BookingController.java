package com.codeclan.example.community_stuff.controllers;

import com.codeclan.example.community_stuff.models.Booking;
import com.codeclan.example.community_stuff.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "/bookings")
    public ResponseEntity<List<Booking>> getAllBooking(
            @RequestParam(name = "asset", required = false) Long asset,
            @RequestParam(name = "user", required = false) Long user
    ) {
        if(asset != null)
        {
            return new ResponseEntity<List<Booking>>(bookingRepository.findBookingsByAssetId(asset), HttpStatus.OK);
        }
        if(user != null)
        {
            return new ResponseEntity<List<Booking>>(bookingRepository.findBookingsByUserId(user), HttpStatus.OK);
        }
        return new ResponseEntity<List<Booking>>(bookingRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/bookings/{id}")
    public ResponseEntity getBookingById(@PathVariable Long id) {

        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/bookings")
    public ResponseEntity<Booking> postBooking(@RequestBody Booking booking){
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking){
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.OK);
    }

    @DeleteMapping(value = "/bookings/{id}")
    public ResponseEntity<Booking> deleteBooking(@PathVariable Long id) {
        Booking found = bookingRepository.getOne(id);
        bookingRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
