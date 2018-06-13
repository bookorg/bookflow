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
          title: 'Naruto: The Search for Sasuke',
          description: 'A new ninja causes trouble among the ranks of Team Kakashi when they return from the battle against Sasori. The secrets this stranger hides could be disastrous for Naruto. Meanwhile, Naruto\'s nemesis Orochimaru has troubles of his own--his stronghold may be infiltrated by a spy! -- VIZ Media',
          quality: 1,
          image: 'http://books.google.com/books/content?id=uVXwAQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          yearReleased: 2011
        },
        {
          id: 2,
          title: 'Finding the Next Steve Jobs',
          description: 'From the legendary founder of Atari and Chuck E. Cheese’s and Steve Jobs’s first boss, the secrets to finding, hiring, keeping, and nurturing creative talent. The business world is changing faster than ever, and every day your company faces new complications and difficulties. The only way to resolve these issues is to have a staff of wildly creative people who live as much in the future as the present, who thrive on being different, and whose ideas will guarantee that your company will prosper when other companies fail. A celebrated visionary and iconoclast, Nolan Bushnell founded the groundbreaking gaming company Atari before he went on to found Chuck E. Cheese’s and two dozen other companies. He also happened to launch the career of the late Steve Jobs, along with those of many other bril\u00adliant creatives over the course of his five decades in business. With refreshing candor, keen psychological insight, and robust humor, Bushnell explains in Finding the Next Steve Jobs how to think boldly and differently about companies and organizations—and spe\u00adcifically the people who work within them. For anyone trying to turn a company into the next Atari or Apple, build a more creative workforce, or fashion a career in a changing world, this book will enlighten, challenge, surprise, and amuse.',
          quality: 3,
          image: 'http://books.google.com/books/content?id=t6CzDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
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
          title: 'Where\'s Trump?',
          description: 'Winners aren\'t losers!\' Can you spot the Donald? In an array of crowded scenes, from building a wall around Mexico to carving his face into Mount Rushmore, at a Trump wrestling match, a golf course in Scotland and having fun at a Tea Party rally, search for Donald J. Trump amongst the masses. With tons of in-jokes and bonus material to find (including Obama\'s birth certificate and his trademark toupee), plus cameo appearances from Sarah Palin and other high-flying pals, this book provides hours of fun for the haters (and lovers) of the all-American phenomenon that is TRUMP. A classic and fun gift book, tracking Trump around the world will be endless amusement for all the family.',
          quality: 1,
          image: 'http://books.google.com/books/content?id=xCSfCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          yearReleased: 2014
        },
        {
          id: 2,
          title: 'The Search for Tactical Success in Vietnam',
          description: 'Thoroughly researched and engagingly written, this text provides a unique insight into counterinsurgency and Australia\'s involvement in the Vietnam War.',
          quality: 3,
          image: 'https://books.google.com/books/content?id=QyFTCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          yearReleased: 2015
        }
      ]
    }
  ]
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_BOOK': {
      const obj = Object.assign(state.users[0].books, {});
      lastItem = Object.keys(obj)[Object.keys(obj).length-1];
      lastId = state.users[0].books[lastItem].id;
      const newState = Object.assign(state, {});
      newBook = Object.assign(action.book, {});
      newBook.id = lastId + 1;
      newState.users[0].books = newState.users[0].books.concat(newBook);
      return newState;
    }
  }
  return state;
}


export default combineReducers({
  users: userReducer
});