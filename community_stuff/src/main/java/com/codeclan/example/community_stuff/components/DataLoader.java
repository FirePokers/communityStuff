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

        Tag tag7 = new Tag("Misc");
        tagRepository.save(tag7);

        Tag tag8 = new Tag("Electric");
        tagRepository.save(tag8);

        Tag tag9 = new Tag("Access");
        tagRepository.save(tag9);

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

        reUseAsset = new Asset("Irwin Jack 8TPI", "Razor-sharp triple-ground teeth for cutting all materials.", "https://media.screwfix.com/is/image//ae235?src=ae235/763FV_P&$prodImageMedium$", "none", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag4);

        reUseAsset = new Asset("Cordless Grinder 240v", "Compact angle grinder with spindle lock for easy disc change. Features a 2-in-1 guard and anti-vibration auxiliary handle to provide comfort and control.", "https://media.screwfix.com/is/image//ae235?src=ae235/34861_P&$prodImageMedium$", "none", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag7);

        reUseAsset = new Asset("Gas Nail Gun", "Nails, long nails, short nails, sharp nails, shiny nails, happy nails, nails.. #GasPower #NailedIt", "https://media.screwfix.com/is/image//ae235?src=ae235/83355_P&$prodImageMedium$", "none", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag7);

        reUseAsset = new Asset("M18 Radio", "I like that boom boom pow, them chickens jackin my style, they try to cope my swagger", "https://media.screwfix.com/is/image//ae235?src=ae235/857FJ_P&$prodImageMedium$", "none", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag3);

        reUseAsset = new Asset("Rail Gun", "professional breaker with vibration control to help sustain maximum damage", "https://media.screwfix.com/is/image//ae235?src=ae235/439KX_P&$prodImageMedium$", "none", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag3);

        reUseAsset = new Asset("Electrician Toolkit", "Essential selection of professional electricians tools.", "https://media.screwfix.com/is/image//ae235?src=ae235/35475_P&$prodImageMedium$", "none", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag1);

        reUseAsset = new Asset("Arc Welder", "Compact welder, ideal for any DIY enthusiast. Featuring inverter technology for a long duty cycle and smooth welding. ", "https://media.screwfix.com/is/image//ae235?src=ae235/817FG_P&$prodImageMedium$", "none", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag1);

        reUseAsset = new Asset("Teng 42ps Key Set", "Comprehensive set of hex and TX keys. Supplied in a Teng Tools TC tray with removable hinged click and lock lid and dovetail joints. The tools are held in place using 2-colour pre-cut EVA foam tool inserts.", "https://media.screwfix.com/is/image//ae235?src=ae235/2945X_P&$prodImageMedium$", "none", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag9);

        reUseAsset = new Asset("6.2m Scaffold Tower", "HILYTE aluminium Double Hatch Deck Scaffold Tower features ladder rung spacing, double hatch decks, colour-coded textured braces. In 1.8m or 2.5m lengths with 250mm span frame pitch. Complies with 3T requirements.", "https://media.screwfix.com/is/image//ae235?src=ae235/61656_P&$prodImageMedium$", "Basic Scaffold Level 1", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag7);

        reUseAsset = new Asset("Safety Sign 400x300", "Keeping your workplace safe indoors and outside", "https://media.screwfix.com/is/image//ae235?src=ae235/28550_P&$prodImageMedium$", "None", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag9);

        reUseAsset = new Asset("Fall Arrest Kit", "Fully adjustable harness with 2 points of attachment. Black and grey colouring for ease of identification between the shoulder and leg straps. Complete with 1 captive pin aluminium karabiner and 2 aluminium scaffold hooks. Supplied with JSP rucksack.", "https://media.screwfix.com/is/image//ae235?src=ae235/8973F_P&$prodImageMedium$", "None", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag7);
        reUseTagList.add(tag9);

        reUseAsset = new Asset("Safety Helmet", "Lightweight, ventilated ABS safety helmet with 3-point chin strap. Designed for working at height. No peak for enhanced vertical vision. Rotor system for size adjustment.", "https://media.screwfix.com/is/image//ae235?src=ae235/7110R_P&$prodImageMedium$", "None", reUseTagList);
        assetRepository.save(reUseAsset);


        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag8);


        reUseAsset = new Asset("Power Washer", "Power Control Vario lance gives the right pressure setting with a simple twist and click. The Dirt Blaster lance gives outstanding performance on patios and other hard surfaces.", "https://media.screwfix.com/is/image//ae235?src=ae235/643KH_P&$prodImageMedium$", "None", reUseTagList);
        assetRepository.save(reUseAsset);


        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag8);

    // these 2
        reUseAsset = new Asset("Electric Bench 240v", "Features a powerful motor, cast alloy base and rubber feet for increased stability. Ideal for a variety of jobs including grinding, sharpening, removing rust, preparing metal for soldering and welding, buffing and cleaning non-ferrous metals.", "https://media.screwfix.com/is/image//ae235?src=ae235/844FG_P&$prodImageMedium$", "None", reUseTagList);
        assetRepository.save(reUseAsset);

        reUseTagList = new ArrayList<>();
        reUseTagList.add(tag8);


        reUseAsset = new Asset("Work Light 20w 7.4v", "Features 2 lighting settings, LED power charge indicator and wide handle for easy carrying.", "https://media.screwfix.com/is/image//ae235?src=ae235/769KF_P&$prodImageMedium$", "None", reUseTagList);
        assetRepository.save(reUseAsset);


        Booking booking1 = new Booking( new Date("2021/04/06"), new Date("2021/04/08"), hammer1, user1);
        bookingRepository.save(booking1);
        Booking booking2 = new Booking( new Date("2021/04/06"), new Date("2021/04/08"), postdriver1, user2);
        bookingRepository.save(booking2);


    }
}
