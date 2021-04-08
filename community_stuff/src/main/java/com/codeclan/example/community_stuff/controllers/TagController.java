package com.codeclan.example.community_stuff.controllers;

import com.codeclan.example.community_stuff.models.Tag;
import com.codeclan.example.community_stuff.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(value = "/tags")
    public ResponseEntity<Tag> postTag(@RequestBody Tag tag){
        tagRepository.save(tag);
        return new ResponseEntity<>(tag, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/tags/{id}")
    public ResponseEntity<Tag> updateTag(@RequestBody Tag tag){
        tagRepository.save(tag);
        return new ResponseEntity<>(tag, HttpStatus.OK);
    }

    @DeleteMapping(value = "/tags/{id}")
    public ResponseEntity<Tag> deleteTag(@PathVariable Long id) {
        Tag found = tagRepository.getOne(id);
        tagRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
