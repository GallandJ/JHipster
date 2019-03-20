import axios from 'axios';
import { SUCCESS } from 'app/shared/reducers/action-type.util';

export const ACTION_TYPES = {
  GET_POSITION_BY_YEAR: 'leaflet/GET_POSITIONS_BY_YEAR'
};

const initialState = {
  positions: [],
  yearPositions: 0
};

export type leafletState = Readonly<typeof initialState>;

export default (state: leafletState = initialState, action): leafletState => {
  switch (action.type) {
    case SUCCESS(ACTION_TYPES.GET_POSITION_BY_YEAR):
      return {
        ...state,
        yearPositions: action.payload
      };
    default:
      return state;
  }
};

export const getPositionsByYear = year => async (dispatch, getState) => {
  dispatch({
    type: ACTION_TYPES.GET_POSITION_BY_YEAR,
    payload: year
  });
};
