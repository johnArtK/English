"use client";

import { Item } from "@/words3000";
import { Tag } from "antd";
import { useEffect, useRef, useState } from "react";

const ITEMS_PER_PAGE = 50;

export default function InfiniteList({
  initialItems,
}: {
  initialItems: Item[];
}) {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef<HTMLDivElement | null>(null);

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/words?page=${page + 1}`);
      const data: Item[] = await res.json();

      if (data.length < ITEMS_PER_PAGE) {
        setHasMore(false); // больше ничего нет
      }

      setItems((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch (e) {
      console.error("Ошибка при загрузке:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { rootMargin: "100px" }
    );
    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loader.current, hasMore, loading]);

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="justify-center flex text-2xl font-bold mb-4">3000 английских слов</h1>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="justify-center flex gap-3"
            // className="p-4 border rounded-lg shadow-sm hover:shadow transition"
          >
            <Tag color="cyan">{item.word}</Tag>
            <span>&ndash;</span>
            <Tag color="green">{item.translation}</Tag>
          </li>
        ))}
      </ul>
      <div
        ref={loader}
        className="h-20 flex items-center justify-center text-gray-500"
      >
        {loading
          ? "Загрузка..."
          : hasMore
          ? "Прокрути вниз для загрузки"
          : "Все элементы загружены"}
      </div>
    </main>
  );
}
