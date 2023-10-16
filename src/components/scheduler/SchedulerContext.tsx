import { createContext, useContext, useReducer } from "react";
import { SchedulerAction, SchedulerState, initialState, schedulerReducer } from "./SchedulerReducer";

export const SchedulerContext = createContext<{
  state: SchedulerState;
  dispatch: React.Dispatch<SchedulerAction>;
  }>({
      state: initialState,
      dispatch: () => undefined,
  });
const SchedulerDispatchContext = createContext(schedulerReducer);

export const SchedulerProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(schedulerReducer, initialState);
  return (
    <SchedulerContext.Provider value={{state, dispatch}}>
        {children}
    </SchedulerContext.Provider>
  );
}

export function useSchedulerContext() {
  return useContext(SchedulerContext);
}

export function useSchedulerDispatchContext() {
  return useContext(SchedulerDispatchContext);
}