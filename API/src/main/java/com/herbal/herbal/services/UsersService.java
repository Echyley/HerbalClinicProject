package com.herbal.herbal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.herbal.herbal.exceptions.ResourceNotFoundException;
import com.herbal.herbal.model.Users;
import com.herbal.herbal.repositories.UsersRepository;

import java.util.List;
import java.util.logging.Logger;

@Service
public class UsersService {
    
    private final Logger logger = Logger.getLogger(UsersService.class.getName());

    @Autowired
    UsersRepository repository;

    //Find All
    public List<Users> findAll() {
        logger.info("Finding all users!");

        return repository.findAll();
    }

    //Create
    public Users create(Users user) {
        logger.info("Creating an user!");

        return repository.save(user);
    }

    //Read
    public Users findById(Long id) {
        logger.info("Finding an user!");
        return repository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("No records found for this id"));
     }

    //Update
    public Users update(Long id, Users updatedUser) {
        Users existingUser = repository.findById(id).orElse(null);

        if (existingUser != null) {
            if (existingUser.getName() != null) {
                existingUser.setName(existingUser.getName());
            }
            if (updatedUser.getPassword() != null) {
                existingUser.setPassword(updatedUser.getPassword());
            }
            if (existingUser.getEmail() != null) {
                existingUser.setEmail(existingUser.getEmail());
            }

            return repository.save(existingUser);
        
        }

        return null;
    }

    //Delete
    public void delete(Long id) {
        logger.info("Deleting an user!");

        var entity = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("No records found for thid id"));

        repository.delete(entity);
    }
}
