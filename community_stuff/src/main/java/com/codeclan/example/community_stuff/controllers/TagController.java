package com.codeclan.example.community_stuff.controllers;

import com.codeclan.example.community_stuff.models.Tag;
import com.codeclan.example.community_stuff.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TagController {

    @Autowired
    TagRepository tagRepository;

    @GetMapping(value = "/tags")
    public ResponseEntity<List<Tag>> getAllTags(){
        return new ResponseEntity<List<Tag>>(tagRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/tags/{id}")
    public ResponseEntity getTagById(@PathVariable Long id) {
        return new ResponseEntity<>(tagRepository.findById(id), HttpStatus.OK);
    }
}
