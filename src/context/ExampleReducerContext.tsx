import {createContext, PropsWithChildren, useContext, useEffect, useReducer} from 'react';

// ----------------------------------------------------------------------
interface ReducerContextData {
  number?: number,
  text?: string
}

interface ReducerContextType {
  data: ReducerContextData,
  updateNumber: (number: number) => void,
  updateText: (text: string) => void,
}

enum ReducerContextAction {
  INITIALIZE = 'INITIALIZE',
  UPDATE_NUMBER = 'UPDATE_NUMBER',
  UPDATE_TEXT = 'UPDATE_TEXT',
}

const initialState: ReducerContextData = {
  number: 0,
  text: '',
};

interface ReducerAction {
  type: ReducerContextAction;
  payload: ReducerContextData;
}

function reducer(state: ReducerContextData, action: ReducerAction) {
  const {type, payload} = action;
  switch (type) {
    case ReducerContextAction.INITIALIZE:
      return {
        ...state,
        number: payload.number,
        text: payload.text
      };
    case ReducerContextAction.UPDATE_NUMBER:
      return {
        ...state,
        number: payload.number,
      };
    case ReducerContextAction.UPDATE_TEXT:
      return {
        ...state,
        text: payload.text
      };
    default:
      return state;
  }
}

const ExampleReducerContext = createContext<ReducerContextType | undefined>(undefined);

// ----------------------------------------------------------------------

export const useReducerProvider = () => {
  const data = useContext(ExampleReducerContext)
  if (data === undefined) {
    throw new Error(
      'useReducerProvider must be used within a ReducerProvider tag',
    )
  }
  return data
}

export function ReducerProvider({children}: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = () => {
      dispatch({
        type: ReducerContextAction.INITIALIZE,
        payload: {number: 1, text: 'test'},
      });
    }
    initialize();
  }, []);

  const updateNumber = (number: number) => {
    dispatch({type: ReducerContextAction.UPDATE_NUMBER, payload: {number}});
  };

  const updateText = (text: string) => {
    dispatch({type: ReducerContextAction.UPDATE_TEXT, payload: {text}});
  };

  return (
    <ExampleReducerContext.Provider
      value={{
        data: state,
        updateNumber,
        updateText
      }}
    >
      {children}
    </ExampleReducerContext.Provider>
  )
}
