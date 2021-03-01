import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
  },
});

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(response => response.data);
  },
};

export const followAPI = {
  followUser(userId) {
    return instance.post(`follow/${userId}`)
        .then(response => response.data);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
        .then(response => response.data);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
        .then(response => response.data);
  },
};