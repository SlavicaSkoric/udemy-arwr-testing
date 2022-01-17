import tv4 from 'tv4';
import stateSchema from './stateSchema';

const stateValidator =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    //console.log(tv4.validate(getState(), stateSchema));

    if (!tv4.validate(getState(), stateSchema)) {
      console.warn('Invalid state schema detected');
    }
  };

export default stateValidator;

//getState - returns all the data in our Redux store
