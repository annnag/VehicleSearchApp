import { connectToDB } from "@/utils/database";
import { Vehicle } from "@/models/vehicle";
import { NextRequest, NextResponse } from "next/server";
import { VEHICLE } from "@/utils/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const filter = searchParams.get("filter");
    const queryString = searchParams.get("queryString");

    await connectToDB();
    const dbQuery = {
      ...(filter && filter !== VEHICLE.ALL && { type: filter }),
      ...(queryString && {$text: {$search: queryString} }),
    };
    const data = await Vehicle.find(dbQuery);
    
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
