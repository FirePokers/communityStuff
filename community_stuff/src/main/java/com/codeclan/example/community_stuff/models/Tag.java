package com.codeclan.example.community_stuff.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tags")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="tag_name")
    private String tagName;

    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "assets_tags",
            joinColumns = {@JoinColumn(name  = "tag_id", nullable = false, updatable = true)},
            inverseJoinColumns = {@JoinColumn(name = "asset_id", nullable = false, updatable = true)}
    )
    private List<Asset> assets;

    public Tag() {
    }

    public Tag(String tagName) {
        this.tagName = tagName;
        this.assets = new ArrayList<>();
    }

    public List<Asset> getAssets() {
        return assets;
    }

    public void setAssets(List<Asset> assets) {
        this.assets = assets;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }
}
