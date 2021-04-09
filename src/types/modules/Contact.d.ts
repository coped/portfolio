import { CONTACT } from "modules/home/Contact";

/**
 * Reducer types
 */
export interface ContactState {
  notification: { type: string; message: string };
  form: {
    isLoading: boolean;
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
  | FormSetMessage;

export type NotificationSuccess = { type: CONTACT.NOTIFICATION_SUCCESS };

export type NotificationError = { type: CONTACT.NOTIFICATION_ERROR };

export type NotificationEmpty = { type: CONTACT.NOTIFICATION_EMPTY };

export type FormSetLoading = {
  type: CONTACT.FORM_SET_LOADING;
  payload: boolean;
};

export type FormSetName = { type: CONTACT.FORM_SET_NAME; payload: string };

export type FormSetEmail = { type: CONTACT.FORM_SET_EMAIL; payload: string };

export type FormSetMessage = {
  type: CONTACT.FORM_SET_MESSAGE;
  payload: string;
};
