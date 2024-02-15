"use client"; // Error components must be Client Components

import { Button } from "@tremor/react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-2">
      <h2>Something went wrong!</h2>
      <Button
        color="gray"
        size="xs"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
