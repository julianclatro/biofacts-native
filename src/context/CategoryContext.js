import createDataContext from './createDataContext';
import backend from '../apis/backend';

const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_categories':
      return action.payload;
    default:
      return state;
  };
};

const fetchCategories = dispatch => async () => {
  const response = await backend.get('/categories', { headers: {
    accept: 'application/json',
    }
  });
  dispatch({ type: 'fetch_categories', payload: response.data });
};

export const { Provider, Context } = createDataContext(
  categoryReducer,
  { fetchCategories },
  []
);
