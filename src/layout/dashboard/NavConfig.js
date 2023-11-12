"use client"
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
    {
        id: "my_component",
        title: "My Component",
        path: "/docs/my_component",
        icon: getIcon("eva:pie-chart-2-fill"),
        children: [
            {
                id: "overview_my_component",
                title: "Overview",
                path: "/overview_my_component",
                icon: getIcon("eva:pie-chart-2-fill"),
                children: [
                    {
                        id: "purpose",
                        title: "purpose",
                        path: "/#purpose",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                ]
            },
            {
                id: "table",
                title: "Table",
                path: "/table",
                icon: getIcon("eva:pie-chart-2-fill"),
                children: [
                    {
                        id: "intro",
                        title: "intro",
                        path: "/#intro",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                    {
                        id: "CustomActionTable",
                        title: "CustomActionTable",
                        path: "/#CustomActionTable",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                    {
                        id: "CustomActionTable2",
                        title: "CustomActionTable2",
                        path: "/#CustomActionTable2",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                    {
                        id: "CustomActionTable3",
                        title: "CustomActionTable3",
                        path: "/#CustomActionTable3",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                ]
            },
            {
                id: "form",
                title: "Form",
                path: "/form",
                icon: getIcon("eva:pie-chart-2-fill"),
                children: [
                    {
                        id: "intro",
                        title: "intro",
                        path: "/#intro",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                    {
                        id: "CustomAutoComplete",
                        title: "CustomAutoComplete",
                        path: "/#CustomAutoComplete",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                    {
                        id: "CustomAutoComplete2",
                        title: "CustomAutoComplete2",
                        path: "/#CustomAutoComplete2",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                    {
                        id: "CustomAutoComplete3",
                        title: "CustomAutoComplete3",
                        path: "/#CustomAutoComplete3",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                ]
            },
        ],
    },
    {
        id: "utils",
        title: "Utils",
        path: "/docs/utils",
        icon: getIcon("eva:pie-chart-2-fill"),
        children: [
            {
                id: "overview_utils",
                title: "Overview",
                path: "/overview_utils",
                icon: getIcon("eva:pie-chart-2-fill"),
                children: [
                    {
                        id: "purpose",
                        title: "purpose",
                        path: "/#purpose",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                ]
            },
            {
                id: "formatter",
                title: "Formatter",
                path: "/formatter",
                icon: getIcon("eva:pie-chart-2-fill"),
                children: [
                    {
                        id: "intro",
                        title: "intro",
                        path: "/#intro",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                    {
                        id: "NpwpFormatter",
                        title: "NpwpFormatter",
                        path: "/#NpwpFormatter",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                    {
                        id: "RupiahFormatter",
                        title: "RupiahFormatter",
                        path: "/#RupiahFormatter",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                    {
                        id: "IntegerFormatter",
                        title: "IntegerFormatter",
                        path: "/#IntegerFormatter",
                        icon: getIcon("eva:pie-chart-2-fill"),
                    },
                ]
            },
            
        ],
    },
];

export default navConfig;
