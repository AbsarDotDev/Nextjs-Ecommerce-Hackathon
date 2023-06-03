import { defineType,defineField } from "sanity"

export const products = defineType({
    name:"product",
    type:"document",
    title:"Product",
    fields:[defineField({
        name: "title",
        title:"Product Title",
        type:"string"
    }),
    defineField({
        name: "description",
        title:"Product Description",
        type:"string"
    }),
    defineField({
        name: "price",
        title:"Product Price",
        type:"number"
    }),
    defineField({
        name: "category",
        title:"Product Category",
        type:"reference",
        to:[{
            type:"category"
        }]
    }),
    defineField({
        name: "image",
        title:"Featured Image",
        type:"image"
    })
]
})