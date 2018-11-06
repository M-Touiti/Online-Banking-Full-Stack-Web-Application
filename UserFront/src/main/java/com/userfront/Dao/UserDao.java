package com.userfront.Dao;

import org.springframework.data.repository.CrudRepository;

import com.userfront.domain.User;

public interface UserDao extends CrudRepository<User, Long>{
	User findByUsername(String username);
	User findByEmail(String email);
}
