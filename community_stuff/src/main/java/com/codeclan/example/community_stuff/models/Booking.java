package com.codeclan.example.community_stuff.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="start_date")
    @JsonFormat(pattern = "yyyy/MM/dd")
    private Date startDate;
    @Column(name="end_date")
    @JsonFormat(pattern = "yyyy/MM/dd")
    private Date endDate;

    @JsonIgnoreProperties({"bookings"})
    @ManyToOne
    @JoinColumn(name="asset_id", nullable = false)
    private Asset asset;

    @JsonIgnoreProperties({"bookings"})
    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    public Booking() {
    }

    public Booking(Date startDate, Date endDate, Asset asset, User user) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.asset = asset;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Asset getAsset() {
        return asset;
    }

    public void setAsset(Asset asset) {
        this.asset = asset;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
