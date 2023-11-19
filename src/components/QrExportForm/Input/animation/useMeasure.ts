import ResizeObserver from "resize-observer-polyfill";
import { useCallbackRef } from "./useCallback";
import React, { useState, useEffect } from "react";

export function useMeasure(ref?: any) {
  const [element, attachRef] = useCallbackRef();
  const [bounds, setBounds] = useState({ height: 0 });

  useEffect(() => {
    function onResize([entry]: ResizeObserverEntry[]) {
      setBounds({
        height: entry.contentRect.height,
      });
    }

    const observer = new ResizeObserver(onResize);

    if (element && element.current) {
      observer.observe(element.current);
    }

    return () => {
      return observer.disconnect();
    };
  }, [element]);

  useEffect(() => {
    attachRef(ref);
  }, [attachRef, ref]);

  return bounds;
}
