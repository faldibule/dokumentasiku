"use client"
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
    {
        title: "My Component",
        path: "/docs/my_component",
        icon: getIcon("eva:pie-chart-2-fill"),
        children: [
            {
                title: "Overview",
                path: "/#intro",
                icon: getIcon("eva:pie-chart-2-fill"),
            },
            {
                title: "CustomActionTable",
                path: "/#CustomActionTable",
                icon: getIcon("eva:pie-chart-2-fill"),
            },
            {
                title: "CustomAutoComplete",
                path: "/#CustomAutoComplete",
                icon: getIcon("eva:pie-chart-2-fill"),
            },
        ],
    },
    {
        title: "Utils",
        path: "/docs/utils",
        icon: getIcon("eva:pie-chart-2-fill"),
        children: [
            {
                title: "Overview",
                path: "/#intro",
                icon: getIcon("eva:pie-chart-2-fill"),
            },
            {
                title: "NpwpFormatter",
                path: "/#NpwpFormatter",
                icon: getIcon("eva:pie-chart-2-fill"),
            },
            {
                title: "RupiahFormatter",
                path: "/#RupiahFormatter",
                icon: getIcon("eva:pie-chart-2-fill"),
            },
            {
                title: "IntegerFormatter",
                path: "/#IntegerFormatter",
                icon: getIcon("eva:pie-chart-2-fill"),
            },
        ],
    },
];

export default navConfig;
