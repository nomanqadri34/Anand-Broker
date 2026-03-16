import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Property from "@/lib/models/Property";

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const area = searchParams.get("area");
    const type = searchParams.get("type");
    
    let query: any = {};
    if (area && area !== "All") query["location.area"] = area;
    if (type && type !== "All") query.type = type;

    const properties = await Property.find(query).sort({ createdAt: -1 });
    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch properties" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const property = await Property.create(body);
    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create property" }, { status: 500 });
  }
}
