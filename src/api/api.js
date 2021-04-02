import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e938a378-9d4e-45f5-8914-855263ee736c',
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
  login(values) {
    const {email, password, rememberMe} = values;
    return instance.post(`auth/login`, {email, password, rememberMe})
        .then(response => response.data);
  }
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
        .then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
        .then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
        .then(response => response.data);
  },
};