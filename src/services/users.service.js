'use strict';

const users = [];

const getUsers = () => users;

const getUser = (userId) => users.find(u => u.id === +userId);

const addUser = (newUser) => users.push(newUser);

const userIndex = (id) => users.findIndex(u => u.id === +id);

const deleteOneUser = (index) => users.splice(index, 1);

const updateUserName = (index, name) => (
  users[index] = {
    ...users[index],
    name,
  }
);

const clearUsers = () => users.splice(0);

const usersService = {
  getUsers,
  getUser,
  addUser,
  userIndex,
  deleteOneUser,
  updateUserName,
  clearUsers,
};

module.exports = {
  usersService,
};
