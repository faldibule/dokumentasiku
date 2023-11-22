"use client"
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const my_component = {
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
                    title: "intro",
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
                    id: "CustomLink",
                    title: "CustomLink",
                    path: "/#CustomLink",
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
                    id: "ControlledTextField",
                    title: "ControlledTextField",
                    path: "/#ControlledTextField",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "UncontrolledTextField",
                    title: "UncontrolledTextField",
                    path: "/#UncontrolledTextField",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "UncontrolledOnSubmit",
                    title: "UncontrolledOnSubmit",
                    path: "/#UncontrolledOnSubmit",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
            ]
        },
        {
            id: "dialog",
            title: "Dialog",
            path: "/dialog",
            icon: getIcon("eva:pie-chart-2-fill"),
            children: [
                {
                    id: "intro",
                    title: "intro",
                    path: "/#intro",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "DownloadDialog",
                    title: "DownloadDialog",
                    path: "/#DownloadDialog",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "ImportDialog",
                    title: "ImportDialog",
                    path: "/#ImportDialog",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "DeleteDialog",
                    title: "DeleteDialog",
                    path: "/#DeleteDialog",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
            ]
        },
    ],
}

const utils = {
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
}

const hooks = {
    id: "hooks",
    title: "Hooks",
    path: "/docs/hooks",
    icon: getIcon("eva:pie-chart-2-fill"),
    children: [
        {
            id: "overview_hooks",
            title: "Overview",
            path: "/overview_hooks",
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
            id: "react_query",
            title: "React Query",
            path: "/react_query",
            icon: getIcon("eva:pie-chart-2-fill"),
            children: [
                {
                    id: "intro",
                    title: "intro",
                    path: "/#intro",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "useFetch",
                    title: "useFetch",
                    path: "/#useFetch",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "useFetchById",
                    title: "useFetchById",
                    path: "/#useFetchById",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "useSave",
                    title: "useSave",
                    path: "/#useSave",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "useDelete",
                    title: "useDelete",
                    path: "/#useDelete",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "useImport",
                    title: "useImport",
                    path: "/#useImport",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
            ]
        },
        {
            id: "ui_hooks",
            title: "UI Hooks",
            path: "/ui_hooks",
            icon: getIcon("eva:pie-chart-2-fill"),
            children: [
                {
                    id: "intro",
                    title: "intro",
                    path: "/#intro",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "useCustomSnackbar",
                    title: "useCustomSnackbar",
                    path: "/#useCustomSnackbar",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
                {
                    id: "useResponsive",
                    title: "useResponsive",
                    path: "/#useResponsive",
                    icon: getIcon("eva:pie-chart-2-fill"),
                },
            ]
        },
    ],
}

const navConfig = [
    my_component,
    utils,
    hooks
];

export default navConfig;
