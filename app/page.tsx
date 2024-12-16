'use client';

import useServerAction from '#/hooks/useServerAction';
import redirectServerAction from '#/lib/redirectServerAction';
import { TEST_TITLE_MAP } from '#/app/catch-all/_constant/common';

export default function Page() {
  const serverAction = useServerAction();
  const handleServerAction = (index: number) => {
    return serverAction(async () => {
      const { title, id } = TEST_TITLE_MAP[index];
      redirectServerAction(`/catch-all/${id}/${title}`);
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>

      <div className="space-y-10 text-white">
        <div>
          <button onClick={() => handleServerAction(0)}>
            not encode server action
          </button>
          <button onClick={() => handleServerAction(1)}>
            encode server action
          </button>
        </div>
      </div>
    </div>
  );
}
