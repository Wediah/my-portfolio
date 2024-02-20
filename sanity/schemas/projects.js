export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
        name: "title",
        title: "Project Title",
        type: "string",
        },
        {
        name: "description",
        title: "Project Description",
        type: "text",
        },
        {
        name: "link",
        title: "Project Link",
        type: "url",
        },
        {
        name: "Projectimage",
        title: "Project Image",
        type: "image",
        options: {
            hotspot: true,
        },
        },
    ],
}