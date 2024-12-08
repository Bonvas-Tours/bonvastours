import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const country = searchParams.get('country')

  if (!country) {
    return NextResponse.json({ error: 'Country parameter is required' }, { status: 400 })
  }

  const username = process.env.GEONAMES_USERNAME
  if (!username) {
    console.error('Missing Geonames username')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const response = await fetch(
      `http://api.geonames.org/searchJSON?country=${country}&featureClass=P&maxRows=1000&username=${username}`
    )
      const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching cities:', error)
    return NextResponse.json({ error: 'Failed to fetch cities' }, { status: 500 })
  }
}

