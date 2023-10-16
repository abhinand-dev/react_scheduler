import { addDays } from 'date-fns'

export function schedulerReducer(state: SchedulerState, action: SchedulerAction): SchedulerState {
  console.log(`Scheduler action : ${action.type} called with payload: ${action.payload}`);
  const { type, payload } = action;
  switch (type) {
    case SchedulerActionKind.INCREMENT_DAY: {
      return {
        ...state,
        date: addDays(new Date(), 1)
      };
    };
    case SchedulerActionKind.UPDATE_DATE: {
      const updatedState = {
        ...state,
        ...payload
      }
      console.log(updatedState)
      return updatedState;
    };
    case SchedulerActionKind.CHANGE_CALENDAR_MODE: {
      const updatedState = {
        ...state,
        ...payload
      }
      console.log(updatedState)
      return updatedState;
    };
    case SchedulerActionKind.POPOVER_TRIGGER: {
      return {
        ...state,
        isPopoverOpen: payload.isPopoverOpen ? payload.isPopoverOpen : false
      }
    };
    default:
      return state;
  };
}

export const initialState: SchedulerState = {
  date: new Date(),
  calendarMode: CALENDAR_VIEW.DAYS,
  isPopoverOpen: false
}

// An enum with all the actions used in the reducer
export enum SchedulerActionKind {
  UPDATE_DATE = 'UPDATE DATE',
  INCREMENT_DAY = 'INCREMENT DAY',
  INCREMENT_MONTH = 'INCREMENT MONTH',
  INCREMENT_YEAR = 'INCREMENT YEAR',
  POPOVER_TRIGGER = 'POPOVER_TRIGGER',
  CHANGE_CALENDAR_MODE= 'CHANGE_CALENDAR_MODE'
}

export const enum CALENDAR_VIEW {
  DAYS,
  MONTHS,
  YEARS,
  DECADES
}

// An interface for our actions
export type SchedulerAction = {
  type: SchedulerActionKind;
  payload: PayloadType;
}

type PayloadType = {
  date?: Date;
  calendarMode?: CALENDAR_VIEW;
  isPopoverOpen?: boolean;
  incrementBy?: number;
  updatedTo?: number;
}

// An interface for our state
export type SchedulerState = {
  date: Date;
  calendarMode: CALENDAR_VIEW;
  isPopoverOpen: boolean;
}