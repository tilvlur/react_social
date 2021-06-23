import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e938a378-9d4e-45f5-8914-855263ee736c',
  },
});

export const usersAPI = {
  requestUsers(pageSize = 10, currentPage = 1) {
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
  },
  logout() {
    return instance.delete(`auth/login`)
        .then(response => response.data);
  },
};

export const profileAPI = {
  requestUserProfile(userId) {
    return instance.get(`profile/${userId}`)
        .then(response => response.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
        .then(response => response.data);
  },
  saveProfile(profile) {
    return instance.put('profile', profile)
        .then(response => response.data);
  },
  requestStatus(userId) {
    return instance.get(`profile/status/${userId}`)
        .then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
        .then(response => response.data);
  },
};