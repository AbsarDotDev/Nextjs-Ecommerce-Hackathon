import { client } from "@/app/lib/sanityClient";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest , {params}:{params:{id:string}}) {
    const res = await client.fetch(`*[_type=='product' && _id=='${params.id}']`);
    return NextResponse.json({data:res})  ;
}