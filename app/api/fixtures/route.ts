import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const league = searchParams.get("league") || "39"
  const season = searchParams.get("season") || "2024"
  const date = searchParams.get("date")
  const from = searchParams.get("from")
  const to = searchParams.get("to")

  let url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${league}&season=${season}`

  if (date) {
    url += `&date=${date}`
  } else if (from && to) {
    url += `&from=${from}&to=${to}`
  } else {
    url += `&last=10`
  }

  try {
    const response = await fetch(url, {
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY || "",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch fixtures")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Error fetching fixtures:", error)
    return NextResponse.json({ error: "Failed to fetch fixtures" }, { status: 500 })
  }
}
