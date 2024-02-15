"use client";
import { login } from "@/lib/actions";
import { Button, TextInput } from "@tremor/react";
import { useFormState, useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      loading={pending}
      color="gray"
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      Add
    </Button>
  );
}

const LoginForm = () => {
  const [state, formActions] = useFormState(login, undefined);
  return (
    <form action={formActions} className="mt-6 flex flex-col gap-3">
      <div>
        <label
          htmlFor="username"
          className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
        >
          Username
        </label>
        <TextInput
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="mt-2"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className=" text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
        >
          Password
        </label>
        <TextInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="mt-2"
        />
      </div>
      <div>
        {state && (
          <p aria-live="polite" className="text-red-500">
            {state}
          </p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
};

export default LoginForm;
