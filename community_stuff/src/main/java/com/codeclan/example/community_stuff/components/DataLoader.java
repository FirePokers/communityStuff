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

        User user1 = new User("SamCooke", "Sam", "Cooke", "s.cooke@example", 1);
        userRepository.save(user1);
        User user2 = new User("ORedding", "Otis", "Redding", "big-otis@jazz.com", 1);
        userRepository.save(user2);

        Tag tag1 = new Tag("hand tool");
        tagRepository.save(tag1);
        Tag tag2 = new Tag("outdoor tool");
        tagRepository.save(tag2);

        Tag tag3 = new Tag("Excavation");
        tagRepository.save(tag3);

        Tag tag4 = new Tag("Powertool");
        tagRepository.save(tag4);

        Tag tag5 = new Tag("Drill");
        tagRepository.save(tag5);

        Tag tag6 = new Tag("Saw");
        tagRepository.save(tag6);

        ArrayList<Tag> hammerTags = new ArrayList<Tag>();
        hammerTags.add(tag1);
        hammerTags.add(tag2);
        Asset hammer1 = new Asset("Black & Decker Hammer", "round head hammer", "https://media.screwfix.com/is/image//ae235?src=ae235/2263F_P&$prodImageMedium$", "none", hammerTags);
        assetRepository.save(hammer1);
        Asset postdriver1 = new Asset("Post Driver (mel)", "manual 25kg mel", "https://media.screwfix.com/is/image//ae235?src=ae235/9151V_P&$prodImageMedium$", "none", hammerTags);
        assetRepository.save(postdriver1);

        ArrayList<Tag> spadeTags = new ArrayList<>();
        spadeTags.add(tag1);
        spadeTags.add(tag2);
        spadeTags.add(tag3);

        Asset spade1 = new Asset("Spade", "Solid forged carbon steel head and extra long socket for strength", "https://media.screwfix.com/is/image//ae235?src=ae235/25427_P&$prodImageMedium$", "none", spadeTags);
        assetRepository.save(spade1);

        ArrayList<Tag> reUseTagList = new ArrayList<>();
        reUseTagList.add(tag4);
        reUseTagList.add(tag5);

        Asset reUseAsset = new Asset("DeWalt DCD776D2T", "Compact drill driver with XR Li-ion battery technology", "https://media.screwfix.com/is/image//ae235?src=ae235/899CF_P&$prodImageMedium$", "Powertools safety training", reUseTagList);
        assetRepository.save(reUseAsset);


        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag4);
        reUseTagList.add(tag6);

        reUseAsset = new Asset("DeWalt DCS391", "This circular saw is ideal for working on MDF, plywood and timber", "https://media.screwfix.com/is/image//ae235?src=ae235/23296_P&$prodImageMedium$", "Powertools safety training", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag1);
        reUseTagList.add(tag6);

        reUseAsset = new Asset("Irwin Jack 8TPI", "Razor-sharp triple-ground teeth for cutting all materials.", "https://media.screwfix.com/is/image//ae235?src=ae235/15083_P&$prodImageMedium$", "none", reUseTagList);
        assetRepository.save(reUseAsset);

        Booking booking1 = new Booking( new Date("2021/04/06"), new Date("2021/04/08"), hammer1, user1);
        bookingRepository.save(booking1);
        Booking booking2 = new Booking( new Date("2021/04/06"), new Date("2021/04/08"), postdriver1, user2);
        bookingRepository.save(booking2);


    }
}
