package com.codeclan.example.community_stuff.repositories;

import com.codeclan.example.community_stuff.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
