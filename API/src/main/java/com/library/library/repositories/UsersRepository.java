package com.library.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.library.model.Users;


public interface UsersRepository extends JpaRepository<Users, Long>{
    
}
