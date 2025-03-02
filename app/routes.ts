import {index, layout, type RouteConfig} from "@react-router/dev/routes";
import {route} from "@react-router/dev/routes";

export default [
    layout("layouts/sidebar.tsx", [
            index("routes/home.tsx"),
            route("contacts/:contactId", "routes/contact.tsx")
        ]
    ),
    route("about", "routes/about.tsx"),
] satisfies RouteConfig;
