import { Item, words3000 } from "@/words3000";
import InfiniteList from "./infinite-list";

const ITEMS_PER_PAGE = 50;

async function getInitialItems(): Promise<Item[]> {
  return words3000.slice(0, ITEMS_PER_PAGE);
}

export default async function Page() {
  const initialItems = await getInitialItems();
  return <InfiniteList initialItems={initialItems} />;
}
