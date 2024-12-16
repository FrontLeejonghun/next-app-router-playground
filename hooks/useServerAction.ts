import { useTransition } from 'react';

export default function useServerAction() {
  const startTransition = useTransition()[1];

  async function serverAction<T>(action: () => Promise<T>) {
    let promise: Promise<T> | undefined;

    startTransition(() => {
      promise = action();
    });

    return await promise!;
  }

  return serverAction;
}
