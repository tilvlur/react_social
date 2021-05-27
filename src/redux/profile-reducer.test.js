import profileReducer, {
  addNewPostActionCreator,
  deletePostActionCreator,
} from './profile-reducer';
import React from 'react';

const state = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'It is my first post', likesCount: 5},
    {id: 3, message: 'It is very nice', likesCount: 22},
  ],
};

it('New post added', () => {
  //1. Test-data
  let action = addNewPostActionCreator('New post added.');

  //2. Action
  let newState = profileReducer(state, action);

  //3. Expectation
  expect(newState.posts.length).toBe(4);
});

it('New post is correct', () => {
  //1.Test-data
  let action = addNewPostActionCreator('New post added.');

  //2. Action
  let newState = profileReducer(state, action);

  //3. Expectation
  expect(newState.posts[3].message).toBe('New post added.')
});

it('Post has been deleted', () => {
  //1. Test-data
  let action = deletePostActionCreator(1);

  //2. Action
  let newState = profileReducer(state, action);

  //3. Expectation
  expect(newState.posts.length).toBe(2)
})