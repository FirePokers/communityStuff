package com.codeclan.example.community_stuff.controllers;

import com.codeclan.example.community_stuff.models.Asset;
import com.codeclan.example.community_stuff.repositories.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AssetController {

    @Autowired
    AssetRepository assetRepository;

    @GetMapping(value = "/assets")
    public ResponseEntity<List<Asset>> getAllAssets() {
        return new ResponseEntity<List<Asset>>(assetRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/assets/{id}")
    public ResponseEntity getAssetById(@PathVariable Long id) {

        return new ResponseEntity<>(assetRepository.findById(id), HttpStatus.OK);
    }
}
