import { Item, words3000 } from "@/words3000";
import InfiniteList from "./infinite-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Изучите 3000 английских слов",
  description:
    "Освойте английский язык с нашей коллекцией из 3000 слов, включая значения и примеры предложений.",
  keywords: [
    "английский словарь",
    "изучение английского",
    "английские слова",
    "приложение для слов",
    "B1",
    "B2",
    "C1",
    "C2",
    "A1",
    "A2",
    "английский B1",
    "английский B2",
    "английский C1",
    "английский C2",
    "английский A1",
    "английский A2",
  ],
  openGraph: {
    title: "Изучите 3000 английских слов",
    description:
      "Изучите 3000 английских слов с их значениями и примерами для улучшения ваших навыков.",
    url: "https://yourdomain.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Изучите 3000 английских слов",
    description: "Освойте английский с 3000 слов, их значениями и примерами.",
    // images: ["https://yourdomain.com/og-image.jpg"],
  },
};

const ITEMS_PER_PAGE = 50;

async function getInitialItems(): Promise<Item[]> {
  return words3000.slice(0, ITEMS_PER_PAGE);
}

export default async function Page() {
  const initialItems = await getInitialItems();
  return <InfiniteList initialItems={initialItems} />;
}
