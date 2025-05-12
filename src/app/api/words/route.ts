
import { words3000 } from "@/words3000"
import { NextRequest, NextResponse } from "next/server"
const ITEMS_PER_PAGE = 50

export async function GET(req: NextRequest) {
  const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 10)
  const start = (page - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  const data = words3000.slice(start, end)
  return NextResponse.json(data)
}
