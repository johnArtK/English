"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { YMInitializer } from "react-yandex-metrika";

const YM_COUNTER_ID = 101787554; // Замените на ваш номер счётчика

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Отслеживание переходов между страницами
  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? `?${searchParams}` : ""}`;
    window.ym?.(YM_COUNTER_ID, "hit", url);
  }, [pathname, searchParams]);

  // Отключение счётчика в режиме разработки
  const analyticsEnabled = process.env.NODE_ENV === "production";

  if (!analyticsEnabled) {
    return null;
  }

  return (
    <YMInitializer
      accounts={[YM_COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
}