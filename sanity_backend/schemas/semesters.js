export default{
    name: "semesters",
    title: "Semesters",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "subjects",
            title: "Subjects",
            type: "array",
            of: [{type:"subject"}]
        },
        {
            name: "link",
            title: "Link",
            type: "string"
        },
        {
            name: "btncolor",
            title: "BtnColor",
            type: "string"
        }
    ]
}