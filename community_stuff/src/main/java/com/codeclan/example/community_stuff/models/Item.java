package com.codeclan.example.community_stuff.models;

public class Item extends Asset {

    private String certificationDetail;


    public Item(String name, String description, String imageUrl, String certificationDetail) {
        super(name, description, imageUrl);
        this.certificationDetail = certificationDetail;
    }

    public Item() {
    }

    public String getCertificationDetail() {
        return certificationDetail;
    }

    public void setCertificationDetail(String certificationDetail) {
        this.certificationDetail = certificationDetail;
    }

}

