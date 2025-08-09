import { useCallback, useEffect, useRef, useState, KeyboardEvent } from "react";
import type { SegmentedOption } from "./SegmentedControl";

export function useIndicator(value: string) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number; height: number }>({ left: 0, width: 0, height: 0 });

  const updateIndicatorLayout = useCallback(() => {
    const btn = itemRefs.current[value];
    const wrap = wrapperRef.current;
    if (!btn || !wrap) return;
    const wrapRect = wrap.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicator({
      left: btnRect.left - wrapRect.left - wrap.clientLeft,
      width: btnRect.width,
      height: btnRect.height,
    });
  }, [value]);

  useEffect(() => {
    updateIndicatorLayout();
  }, [updateIndicatorLayout]);

  useEffect(() => {
    const ro = new ResizeObserver(() => updateIndicatorLayout());
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    window.addEventListener("resize", updateIndicatorLayout);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateIndicatorLayout);
    };
  }, [updateIndicatorLayout]);

  return { wrapperRef, itemRefs, indicator, updateIndicatorLayout } as const;
}

export function useKeyboardNavigation(
  options: SegmentedOption[],
  value: string,
  onChange: (value: string) => void
) {
  const handleKey = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      e.preventDefault();

      const enabled = options.filter((o) => !o.disabled);
      if (enabled.length === 0) return;

      const enabledIdx = enabled.findIndex((o) => o.value === value);
      const last = enabled.length - 1;

      let nextIdx = enabledIdx;
      if (e.key === "ArrowRight") nextIdx = enabledIdx === last ? 0 : enabledIdx + 1;
      if (e.key === "ArrowLeft") nextIdx = enabledIdx <= 0 ? last : enabledIdx - 1;
      if (e.key === "Home") nextIdx = 0;
      if (e.key === "End") nextIdx = last;

      const next = enabled[nextIdx];
      if (next) onChange(next.value);
    },
    [onChange, options, value]
  );

  return { handleKey } as const;
}
