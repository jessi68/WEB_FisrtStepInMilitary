import React, { useReducer,createContext,useContext,useRef} from 'react';

const initialLicenses=[
];

function LicenseReducer(state, action) {
    switch (action.type) {
      case 'CREATE':
        return state.concat(action.todo);
      case 'REMOVE':
        return state.filter(todo => todo.id !== action.id);
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

const LicenseStateContext=createContext();
const LicenseDispatchContext = createContext();
const LicenseNextIdContext = createContext();



export function LicenseProvider({children}) {
    const [state,dispatch] = useReducer(LicenseReducer,initialLicenses);
    const nextId = useRef(5);
    return (
        <LicenseStateContext.Provider value={state}>
            <LicenseDispatchContext.Provider value={dispatch}>
                <LicenseNextIdContext.Provider value={nextId}>
                    {children}
                </LicenseNextIdContext.Provider>
            </LicenseDispatchContext.Provider>
        </LicenseStateContext.Provider>
    );
}

export function useLicenseState() {
    return useContext(LicenseStateContext);
}

export function useLicenseDispatch() {
    return useContext(LicenseDispatchContext);
}

export function useLicenseNextId() {
    return useContext(LicenseNextIdContext);
}