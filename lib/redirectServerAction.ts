'use server';

import { RedirectType, redirect } from 'next/navigation';

const redirectServerAction = (
  url: string | null,
  type: RedirectType = RedirectType.replace,
) => {
  redirect(url || '/', type);
};

export default redirectServerAction;
