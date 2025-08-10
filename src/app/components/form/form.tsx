"use client";

import { useActionState } from "react";

import { submitAction } from "../../../lib/email";
import Button from "../button/button";
import classes from "./form.module.scss";

const initialState = {
  ok: false,
  errors: undefined,
  values: { name: "", email: "", message: "" },
  generalError: undefined,
};

export default function Form() {
  const [state, formAction, isLoading] = useActionState(
    submitAction,
    initialState
  );

  return (
    <form action={formAction} className={classes.form}>
      {/* Honeypot (should stay empty) */}
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" autoComplete="off" />
      </div>

      <div className={classes.nameGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={state.ok ? "" : state.values?.name ?? ""}
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          className=""
          placeholder="John Doe"
        />
        {state.errors?.name && (
          <p id="name-error" className="text-sm text-red-600">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div className={classes.emailGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          defaultValue={state.ok ? "" : state.values?.email ?? ""}
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
          className=""
          placeholder="name@example.com"
        />
        {state.errors?.email && (
          <p id="email-error" className="text-sm text-red-600">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div className={classes.textareaGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          defaultValue={state.ok ? "" : state.values?.message ?? ""}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className=""
          placeholder="Your message here..."
        />
        {state.errors?.message && (
          <p id="message-error" className="text-sm text-red-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" isLoading={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>

      {state.generalError && (
        <p className="text-red-600">{state.generalError}</p>
      )}
      {state.ok && (
        <p className="text-green-700">Thanks! Your message has been sent.</p>
      )}
    </form>
  );
}
