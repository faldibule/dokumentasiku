"use client"
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'My Component',
    path: '/useful',
    icon: getIcon('eva:pie-chart-2-fill'),
    children: [
      {
        title: 'Form',
        path: '/useful',
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
