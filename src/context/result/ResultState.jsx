import React,{useReducer} from 'react'
import ResultContext from './ResultContext';
import {
  GET_RESULT, POST_RESULT
} from '../types';
import {useLocalStorage} from '../../hooks/useLocalStorage';


  const ResultReducer = (state, action) => {
    switch (action.type) {
      case GET_RESULT:
        

        return {
          ...state,
          result: [...action.payload]
        }

        case POST_RESULT: 
        return {
          ...state,
          result: [...action.payload]
        }
          
        
    
      default:
        return state;
    }
  }

const ResultState = (props) => {
  const [value, setValue] = useLocalStorage("results", null);
if (!value || [null, null,null]) {

 var initialState = {
    result: JSON.parse(value)
  };} else {
     var initialState = {
    result: null
  };

  }
    const [state, dispatch] = useReducer(ResultReducer, initialState);

     const get_results = () => {
       const results = JSON.parse(value);
      //  console.log(results)
        dispatch({ type: GET_RESULT, payload: results  });

    }
    const post_results = (results) => {
      setValue(JSON.stringify(results));
      dispatch({ type: POST_RESULT, payload: results  });
    }
  return (
 <ResultContext.Provider
 value={{
   result: state.result,
   get_results,
    post_results
 }}>
 {props.children}
 </ResultContext.Provider>
  )
}

export default ResultState
