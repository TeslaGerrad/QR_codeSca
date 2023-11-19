import React, { useState, useCallback } from "react";

export function useCallbackRef() {
  const [ref, setRef] = useState<any>(null);
  const fn = useCallback((node: any) => {
    setRef(node);
  }, []);

  return [ref, fn];
}
