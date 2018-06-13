import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  users: [
    {
      id: 1,
      username: 'An',
      phoneNumber: '+84989898938',
      location: {
        latitude: 10.762622,
        longitude: 106.660172
      },
      books: [
        {
          id: 1,
          title: 'Some book title',
          description: 'Dummy description',
          quality: 1,
          image: 'https://s3-ap-southeast-1.amazonaws.com/aws.alexfico001/1528889347617.png',
          yearReleased: 2014
        },
        {
          id: 2,
          title: 'Second book',
          description: 'This book is less dum than the other one',
          quality: 3,
          image: 'https://s3-ap-southeast-1.amazonaws.com/aws.alexfico001/foundation_book.jpg',
          yearReleased: 2018
        }
      ]
    },
    {
      id: 2,
      username: 'Nam',
      phoneNumber: '+84989898444',
      location: {
        latitude: 11.762622,
        longitude: 106.660172
      },
      books: [
        {
          id: 1,
          title: 'Some book title2',
          description: 'Dummy description',
          quality: 1,
          image: 'https://covers.openlibrary.org/b/id/240726-S.jpg',
          yearReleased: 2014
        },
        {
          id: 2,
          title: 'Second book2',
          description: 'This book is less dum than the other one',
          quality: 3,
          image: 'https://covers.openlibrary.org/b/id/6121771-S.jpg',
          yearReleased: 2018
        }
      ]
    }
  ]
}

const userReducer = (state = initialState, action) => {
  return state;
}


export default combineReducers({
  users: userReducer
});