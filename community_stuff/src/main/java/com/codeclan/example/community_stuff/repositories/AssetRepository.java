package com.codeclan.example.community_stuff.repositories;

import com.codeclan.example.community_stuff.models.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.beans.JavaBean;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {
}
