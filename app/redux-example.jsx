var redux = require('redux');

console.log('Starting redux example')

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);

  console.log('New state', store.getState());

  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'loading';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+state.map.url +'"target="_blank">View your location</a> '
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('tolyan'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('kolyan'));

store.dispatch(actions.addMovie('mad max', 'action'));

store.dispatch(actions.addMovie('star wars', 'action'));

store.dispatch(actions.removeMovie(1));
