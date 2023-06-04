import { client } from "@/app/lib/sanityClient";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest , {params}:{params:{category:string}}) {
    const res = await client.fetch(`*[_type=='product' && category->name=='${params.category}']`);
    return NextResponse.json({data:res})  ;
}