export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
	return next(action);
}

// It's the same as the following:
/*
export default function(store) {
  return function(next) {
    return function(action) {

    }
  }
}
*/