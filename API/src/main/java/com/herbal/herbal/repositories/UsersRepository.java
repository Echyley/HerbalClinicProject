package com.herbal.herbal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.herbal.herbal.model.Users;


public interface UsersRepository extends JpaRepository<Users, Long>{
    
}
