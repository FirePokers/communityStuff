package com.codeclan.example.community_stuff.controllers;

import com.codeclan.example.community_stuff.models.Asset;
import com.codeclan.example.community_stuff.repositories.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AssetController {

    @Autowired
    AssetRepository assetRepository;

    @GetMapping(value = "/assets")
    public ResponseEntity<List<Asset>> getAllAssets(
            @RequestParam(name="tag", required = false) Long tag
    ) {
        if (tag != null)
        {
            return new ResponseEntity<List<Asset>>(assetRepository.findAssetsByTagsId(tag), HttpStatus.OK);
        }
        return new ResponseEntity<List<Asset>>(assetRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/assets/{id}")
    public ResponseEntity getAssetById(@PathVariable Long id) {

        return new ResponseEntity<>(assetRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/assets")
    public ResponseEntity<Asset> postAsset(@RequestBody Asset asset){
        assetRepository.save(asset);
        return new ResponseEntity<>(asset, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/assets/{id}")
    public ResponseEntity<Asset> updateAsset(@RequestBody Asset asset){
        assetRepository.save(asset);
        return new ResponseEntity<>(asset, HttpStatus.OK);
    }

    @DeleteMapping(value = "/assets/{id}")
    public ResponseEntity<Asset> deleteAsset(@PathVariable Long id) {
        Asset found = assetRepository.getOne(id);
        assetRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
