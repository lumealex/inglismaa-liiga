import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const league = searchParams.get("league") || "39"
  const season = searchParams.get("season") || "2024"

  try {
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/standings?league=${league}&season=${season}`,
      {
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY || "",
        },
      },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch standings")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Error fetching standings:", error)
    return NextResponse.json({ error: "Failed to fetch standings" }, { status: 500 })
  }
}
