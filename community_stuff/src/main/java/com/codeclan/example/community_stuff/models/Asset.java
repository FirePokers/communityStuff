package com.codeclan.example.community_stuff.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "assets")
public class Asset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name="description")
    private String description;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "certification_detail")
    private String certificationDetail;

    @JsonIgnoreProperties(value = "assets")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "assets_tags",
            joinColumns = {@JoinColumn(name = "asset_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="tag_id", nullable = false, updatable = false)}
    )
    private List<Tag> tags;

    @JsonIgnoreProperties(value="asset")
    @OneToMany(mappedBy = "asset", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Booking> bookings;

    public Asset() {
    }

    public Asset(String name, String description, String imageUrl, String certificationDetail, ArrayList<Tag> tags) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.certificationDetail = certificationDetail;
        this.tags = tags;
        this.bookings = new ArrayList<>();
    }

    public String getCertificationDetail() {
        return certificationDetail;
    }

    public void setCertificationDetail(String certificationDetail) {
        this.certificationDetail = certificationDetail;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void addTag(Tag tag) {
        this.tags.add(tag);
    }

    public void addBooking(Booking booking) {
        this.bookings.add(booking);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
