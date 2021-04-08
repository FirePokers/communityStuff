package com.codeclan.example.community_stuff.repositories;

import com.codeclan.example.community_stuff.models.Asset;
import com.codeclan.example.community_stuff.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findBookingsByAssetId(Long id);
    List<Booking> findBookingsByUserId(Long id);
}
