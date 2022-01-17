//asynchronous action creating middleware that we can use later on on our own projects

const async =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    //check to see if the action has a promise on its 'payload' property
    //if it does, then wait for it to resolve
    //if it doesn't, then send the action on to the next middleware
    //debugger;
    //our debugger; statement gets called with the action and we log it out, we can track it through different stages in our application flow by using Chrome Dev Tools
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    //we want to wait for the promise to resolve (get its data!!) and then create a new action with that data and dispatch it
    action.payload.then(function (response) {
      const newAction = { ...action, payload: response };
      //we overwrite the payload we had with the response we got
      dispatch(newAction);
    });
  };

export default async;

//next - a function - a reference to the next middleware inside of our chain
//a function that returns a function that returns a function
