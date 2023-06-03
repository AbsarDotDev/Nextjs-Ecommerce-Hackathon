import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const token = process.env.SANITY_ACCESS_TOKEN

export const client = createClient({
    token:token,
    projectId:projectId,
    dataset:dataset,
    apiVersion:"2023-06-01",
    useCdn:true
})