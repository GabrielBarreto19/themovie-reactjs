export default function movie(state = [], action){
  console.log(action)
  switch (action.type) {
    case 'ADD_MOVIE':
        return action;
    default:
      return state;
  }
}