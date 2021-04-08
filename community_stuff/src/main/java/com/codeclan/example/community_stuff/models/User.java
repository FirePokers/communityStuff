package com.codeclan.example.community_stuff.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="user_name")
    private String userName;
    @Column(name="member_level")
    private int memberLevel;
    @Column(name="renew_date")
    private Date renewDate;
    @JsonIgnoreProperties({"user"})
    @OneToMany(mappedBy="user", fetch = FetchType.LAZY)
    private List<Booking> bookings;


    public User() {
    }

    public User(String userName, int memberLevel, Date renewDate) {
        this.userName = userName;
        this.memberLevel = memberLevel;
        this.renewDate = renewDate;
        this.bookings = new ArrayList<>();
    }


    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getMemberLevel() {
        return memberLevel;
    }

    public void setMemberLevel(int memberLevel) {
        this.memberLevel = memberLevel;
    }

    public Date getRenewDate() {
        return renewDate;
    }

    public void setRenewDate(Date renewDate) {
        this.renewDate = renewDate;
    }
}
