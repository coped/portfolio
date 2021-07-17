import type {
  ContactState,
  Action,
  NotificationEmpty,
  NotificationError,
  NotificationSuccess,
  FormSetLoading,
  FormSetName,
  FormSetEmail,
  FormSetMessage,
  FormReset,
} from "types/modules/Contact";
import { useReducer, ReducerState, Dispatch, ReducerAction } from "react";

/**
 * Constants
 */
export enum FORM {
  NOTIFICATION_SUCCESS = "form/notification/SUCCESS",
  NOTIFICATION_EMPTY = "form/notification/EMPTY",
  SET_LOADING = "form/SET_LOADING",
  SET_NAME = "form/fields/SET_NAME",
  SET_EMAIL = "form/fields/SET_EMAIL",
  SET_MESSAGE = "form/fields/SET_MESSAGE",
  RESET = "form/fields/RESET",
}

/**
 * Actions
 */
export const notificationSuccess = (): NotificationSuccess => ({
  type: FORM.NOTIFICATION_SUCCESS,
});

export const notificationError = (): NotificationError => ({
  type: FORM.NOTIFICATION_ERROR,
});

export const notificationEmpty = (): NotificationEmpty => ({
  type: FORM.NOTIFICATION_EMPTY,
});

export const formSetLoading = (payload: boolean): FormSetLoading => ({
  type: FORM.SET_LOADING,
  payload,
});

export const formSetName = (payload: string): FormSetName => ({
  type: FORM.SET_NAME,
  payload,
});

export const formSetEmail = (payload: string): FormSetEmail => ({
  type: FORM.SET_EMAIL,
  payload,
});

export const formSetMessage = (payload: string): FormSetMessage => ({
  type: FORM.SET_MESSAGE,
  payload,
});

export const formReset = (): FormReset => ({ type: FORM.RESET });

/**
 * Reducers
 */

// Hook to use ContactReducer state and dispatcher
export function useContactReducer(): [
  ReducerState<typeof rootReducer>,
  Dispatch<ReducerAction<typeof rootReducer>>
] {
  return useReducer(rootReducer, initialState);
}

// Building the ContactReducer...
function rootReducer(state: ContactState, action: Action): ContactState {
  return {
    isLoading: isLoadingReducer(state.isLoading, action),
    notification: notificationReducer(state.notification, action),
    form: formReducer(state.form, action),
  };
}

function isLoadingReducer(
  state: ContactState["isLoading"] = initialState.isLoading,
  action: Action
): ContactState["isLoading"] {
  switch (action.type) {
    case FORM.SET_LOADING: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

function notificationReducer(
  state: ContactState["notification"] = initialState.notification,
  action: Action
): ContactState["notification"] {
  switch (action.type) {
    case FORM.NOTIFICATION_SUCCESS: {
      return { type: "success", message: "Message sent." };
    }
    case FORM.NOTIFICATION_ERROR: {
      return {
        type: "warning",
        message: "Something went wrong. Please try again.",
      };
    }
    case FORM.NOTIFICATION_EMPTY: {
      return {
        type: "",
        message: "",
      };
    }
    default: {
      return state;
    }
  }
}

function formReducer(
  state: ContactState["form"] = initialState.form,
  action: Action
): ContactState["form"] {
  switch (action.type) {
    case FORM.SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case FORM.SET_NAME: {
      return { ...state, name: action.payload };
    }
    case FORM.SET_EMAIL: {
      return { ...state, email: action.payload };
    }
    case FORM.SET_MESSAGE: {
      return { ...state, message: action.payload };
    }
    case FORM.RESET: {
      return { ...state, name: "", email: "", message: "" };
    }
    default: {
      return state;
    }
  }
}

/**
 * Initial reducer state
 */
const initialState: ContactState = {
  isLoading: false,
  notification: { type: "", message: "" },
  form: { name: "", email: "", message: "" },
};
