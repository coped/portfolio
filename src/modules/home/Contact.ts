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
} from "types/modules/Contact";
import { useReducer, ReducerState, Dispatch, ReducerAction } from "react";

/**
 * Constants
 */
export enum CONTACT {
  NOTIFICATION_SUCCESS = "contact/notification/SUCCESS",
  NOTIFICATION_ERROR = "contact/notification/ERROR",
  NOTIFICATION_EMPTY = "contact/notification/EMPTY",
  FORM_SET_LOADING = "contact/form/SET_LOADING",
  FORM_SET_NAME = "contact/form/SET_NAME",
  FORM_SET_EMAIL = "contact/form/SET_EMAIL",
  FORM_SET_MESSAGE = "contact/form/SET_MESSAGE",
}

/**
 * Actions
 */
export const notificationSuccess = (): NotificationSuccess => ({
  type: CONTACT.NOTIFICATION_SUCCESS,
});

export const notificationError = (): NotificationError => ({
  type: CONTACT.NOTIFICATION_ERROR,
});

export const notificationEmpty = (): NotificationEmpty => ({
  type: CONTACT.NOTIFICATION_EMPTY,
});

export const formSetLoading = (payload: boolean): FormSetLoading => ({
  type: CONTACT.FORM_SET_LOADING,
  payload,
});

export const formSetName = (payload: string): FormSetName => ({
  type: CONTACT.FORM_SET_NAME,
  payload,
});

export const formSetEmail = (payload: string): FormSetEmail => ({
  type: CONTACT.FORM_SET_EMAIL,
  payload,
});

export const formSetMessage = (payload: string): FormSetMessage => ({
  type: CONTACT.FORM_SET_MESSAGE,
  payload,
});

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
    notification: notificationReducer(state.notification, action),
    form: formReducer(state.form, action),
  };
}

function notificationReducer(
  state: ContactState["notification"] = initialState.notification,
  action: Action
) {
  switch (action.type) {
    case CONTACT.NOTIFICATION_SUCCESS: {
      return { type: "success", message: "Message sent." };
    }
    case CONTACT.NOTIFICATION_ERROR: {
      return {
        type: "warning",
        message: "Something went wrong. Please try again.",
      };
    }
    case CONTACT.NOTIFICATION_EMPTY: {
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
) {
  switch (action.type) {
    case CONTACT.FORM_SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case CONTACT.FORM_SET_NAME: {
      return { ...state, name: action.payload };
    }
    case CONTACT.FORM_SET_EMAIL: {
      return { ...state, email: action.payload };
    }
    case CONTACT.FORM_SET_MESSAGE: {
      return { ...state, message: action.payload };
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
  notification: { type: "", message: "" },
  form: { isLoading: false, name: "", email: "", message: "" },
};
