package com.codeclan.example.community_stuff.components;

import com.codeclan.example.community_stuff.models.Asset;
import com.codeclan.example.community_stuff.models.Booking;
import com.codeclan.example.community_stuff.models.Tag;
import com.codeclan.example.community_stuff.models.User;
import com.codeclan.example.community_stuff.repositories.AssetRepository;
import com.codeclan.example.community_stuff.repositories.BookingRepository;
import com.codeclan.example.community_stuff.repositories.TagRepository;
import com.codeclan.example.community_stuff.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;
    @Autowired
    TagRepository tagRepository;
    @Autowired
    AssetRepository assetRepository;
    @Autowired
    BookingRepository bookingRepository;


    public DataLoader(){

    }

    public void run(ApplicationArguments args) {

        User user1 = new User("Sam Cooke", 1, new Date(1649376000));
        userRepository.save(user1);
        User user2 = new User("Otis Redding", 1, new Date(1649376000));
        userRepository.save(user2);

        Tag tag1 = new Tag("hand tool");
        tagRepository.save(tag1);
        Tag tag2 = new Tag("outdoor tool");
        tagRepository.save(tag2);


        ArrayList<Tag> hammerTags = new ArrayList<Tag>();
        hammerTags.add(tag1);
        hammerTags.add(tag2);
        Asset hammer1 = new Asset("Black & Decker Hammer", "round head hammer", "https://media.screwfix.com/is/image//ae235?src=ae235/2263F_P&$prodImageMedium$", "none", hammerTags);
        assetRepository.save(hammer1);
        Asset postdriver1 = new Asset("Post Driver (mel)", "manual 25kg mel", "https://media.screwfix.com/is/image//ae235?src=ae235/9151V_P&$prodImageMedium$", "none", hammerTags);
        assetRepository.save(postdriver1);

        Booking booking1 = new Booking( new Date(1617888316), new Date(1618061116), hammer1, user1);
        bookingRepository.save(booking1);
        Booking booking2 = new Booking( new Date(1621085116), new Date(1621189516), postdriver1, user2);
        bookingRepository.save(booking2);


    }
}
