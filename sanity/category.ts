import { defineType,defineField } from "sanity"

export const category=defineType({
    name:"category",
    type:"document",
    title:"Categories",
    fields:[defineField({
        name:"name",
        title:"Category Name",
        type:"string",

    }),
    defineField({
        name: "description",
        title:"Product Description",
        type:"string"
    }),
    defineField({
        name: "image",
        title:"Featured Image",
        type:"image"
    })]

})