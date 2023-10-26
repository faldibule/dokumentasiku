"use client"
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'My Component',
    path: '/docs/my_component',
    icon: getIcon('eva:pie-chart-2-fill'),
    children: [
      {
        title: 'Overview',
        path: '/#intro',
        icon: getIcon('eva:pie-chart-2-fill'),
      },
      {
        title: 'CustomActionTable',
        path: '/#1',
        icon: getIcon('eva:pie-chart-2-fill'),
      },
      {
        title: 'CustomActionTable',
        path: '/#2',
        icon: getIcon('eva:pie-chart-2-fill'),
      },
      {
        title: 'CustomActionTable',
        path: '/#3',
        icon: getIcon('eva:pie-chart-2-fill'),
      }
    ]
  },
  { 
    title: 'Utils',
    path: '/utils',
    icon: getIcon('eva:pie-chart-2-fill'),
    children: [
      {
        title: 'Form',
        path: '/useful',
        icon: getIcon('eva:pie-chart-2-fill'),
      }
    ]
}

];

export default navConfig;
