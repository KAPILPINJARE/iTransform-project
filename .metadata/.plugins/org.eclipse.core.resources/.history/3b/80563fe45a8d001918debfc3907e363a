package com.capgemini.itransform.userservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.itransform.userservice.dao.UserDao;
import com.capgemini.itransform.userservice.entity.User;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserDao dao;
	
	public User addNewUser(User user) {
		return dao.save(user);
	}
	
	public User getUserByUserName(String userName) {
		return dao.findByuserName(userName);
	}
}
