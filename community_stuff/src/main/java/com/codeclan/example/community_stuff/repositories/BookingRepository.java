package com.codeclan.example.community_stuff.repositories;

import com.codeclan.example.community_stuff.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
