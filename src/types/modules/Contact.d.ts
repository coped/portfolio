import { FORM } from "modules/home/Contact";

/**
 * Reducer types
 */
export interface ContactState {
  isLoading: boolean;
  notification: { type: string; message: string };
  form: {
    name: string;
    email: string;
    message: string;
  };
}

/**
 * Action types
 */
export type Action =
  | NotificationSuccess
  | NotificationError
  | NotificationEmpty
  | FormSetLoading
  | FormSetName
  | FormSetEmail
  | FormSetMessage
  | FormReset;

export type NotificationSuccess = { type: FORM.NOTIFICATION_SUCCESS };

export type NotificationError = { type: FORM.NOTIFICATION_ERROR };

export type NotificationEmpty = { type: FORM.NOTIFICATION_EMPTY };

export type FormSetLoading = {
  type: FORM.FORM_SET_LOADING;
  payload: boolean;
};

export type FormSetName = { type: FORM.FORM_SET_NAME; payload: string };

export type FormSetEmail = { type: FORM.FORM_SET_EMAIL; payload: string };

export type FormSetMessage = {
  type: FORM.FORM_SET_MESSAGE;
  payload: string;
};

export type FormReset = { type: FORM.FORM_RESET };
