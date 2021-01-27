export const navigation: any[] = [
  {
    id: 'dashboards',
    label: 'Dashboard',
    translate: 'NAV.DASHBOARDS',
    type: 'collapsable',
    icon: 'dashboard',
    link: '/'
  },
  {
    id: 'testes',
    label: 'Verificações',
    translate: 'NAV.CALENDAR',
    type: 'item',
    icon: 'build',
    link: '/nx'
  },
  {
    id: 'auxiliares',
    label: 'Auxiliares',
    translate: 'NAV.ECOMMERCE',
    type: 'collapsable',
    icon: 'import_contacts',
    items: [
      {
        id: 'cargos',
        label: 'Cargos',
        type: 'item',
        link: '/auxiliares/cargos/index',
        exactMatch: false,
        matchURL: function () {
          // Some Logic
          return true;
        }
      },
      {
        id: 'menus',
        label: 'Menus',
        type: 'item',
        link: '/seguranca/menus',
        dontEmit: true,
        // navigationExtras: {
        //   queryParams: { order: 'popular', filter: 'new' }
        // }
        exactMatch: true
      },
      {
        id: 'profiles',
        label: 'Perfis',
        type: 'item',
        link: '/seguranca/profiles',
        exactMatch: false
      },
      {
        id: 'orderDetail',
        label: 'Order Detail',
        type: 'item',
        link: '/apps/e-commerce/orders/1',
        exactMatch: true
      }
    ]
  },
  {
    id: 'academy',
    label: 'Academy',
    translate: 'NAV.ACADEMY',
    type: 'item',
    icon: 'school',
    link: '/apps/academy'
  },
  {
    id: 'mail',
    label: 'Mail',
    translate: 'NAV.MAIL.TITLE',
    type: 'item',
    icon: 'email',
    link: '/apps/mail',
    badge: {
      label: '25',
      translate: 'NAV.MAIL.BADGE',
      bg: '#F44336',
      fg: '#FFFFFF'
    }
  },
  {
    id: 'mail-ngrx',
    label: 'Mail Ngrx',
    translate: 'NAV.MAIL_NGRX.TITLE',
    type: 'item',
    icon: 'email',
    link: '/apps/mail-ngrx',
    badge: {
      label: '13',
      translate: 'NAV.MAIL_NGRX.BADGE',
      bg: '#EC0C8E',
      fg: '#FFFFFF'
    }
  },
  {
    id: 'chat',
    label: 'Chat',
    translate: 'NAV.CHAT',
    type: 'item',
    icon: 'chat',
    link: '/apps/chat',
    badge: { label: '13', bg: '#09d261', fg: '#FFFFFF' }
  },
  {
    id: 'file-manager',
    label: 'File Manager',
    translate: 'NAV.FILE_MANAGER',
    type: 'item',
    icon: 'folder',
    link: '/apps/file-manager'
  },
  {
    id: 'contacts',
    label: 'Contacts',
    translate: 'NAV.CONTACTS',
    type: 'item',
    icon: 'account_box',
    link: '/apps/contacts'
  },
  {
    id: 'to-do',
    label: 'To-Do',
    translate: 'NAV.TODO',
    type: 'item',
    icon: 'check_box',
    link: '/apps/todo',
    badge: { label: '3', bg: '#FF6F00', fg: '#FFFFFF' }
  },
  {
    id: 'scrumboard',
    label: 'Scrumboard',
    translate: 'NAV.SCRUMBOARD',
    type: 'item',
    icon: 'assessment',
    link: '/apps/scrumboard'
  },
  {
    id: 'authentication',
    label: 'Authentication',
    type: 'collapsable',
    icon: 'lock',
    badge: { label: '10', bg: '#525e8a', fg: '#FFFFFF' },
    items: [
      { id: 'login', label: 'Login', type: 'item', link: '/pages/auth/login' },
      {
        id: 'login-v2',
        label: 'Login v2',
        type: 'item',
        link: '/pages/auth/login-2'
      },
      {
        id: 'register',
        label: 'Register',
        type: 'item',
        link: '/pages/auth/register'
      },
      {
        id: 'register-v2',
        label: 'Register v2',
        type: 'item',
        link: '/pages/auth/register-2'
      },
      {
        id: 'forgot-password',
        label: 'Forgot Password',
        type: 'item',
        link: '/pages/auth/forgot-password'
      },
      {
        id: 'forgot-password-v2',
        label: 'Forgot Password v2',
        type: 'item',
        link: '/pages/auth/forgot-password-2'
      },
      {
        id: 'reset-password',
        label: 'Reset Password',
        type: 'item',
        link: '/pages/auth/reset-password'
      },
      {
        id: 'reset-password-v2',
        label: 'Reset Password v2',
        type: 'item',
        link: '/pages/auth/reset-password-2'
      },
      {
        id: 'lock-screen',
        label: 'Lock Screen',
        type: 'item',
        link: '/pages/auth/lock'
      },
      {
        id: 'mail-confirmation',
        label: 'Mail Confirmation',
        type: 'item',
        link: '/pages/auth/mail-confirm'
      }
    ]
  },
  {
    id: 'coming-soon',
    label: 'Coming Soon',
    type: 'item',
    icon: 'alarm',
    link: '/pages/coming-soon'
  },
  {
    id: 'errors',
    label: 'Errors',
    type: 'collapsable',
    icon: 'error',
    items: [
      {
        id: '404',
        label: '404',
        type: 'item',
        link: '/pages/errors/error-404'
      },
      {
        id: '500',
        label: '500',
        type: 'item',
        link: '/pages/errors/error-500'
      }
    ]
  },
  {
    id: 'invoice',
    label: 'Invoice',
    type: 'collapsable',
    icon: 'receipt',
    items: [
      {
        id: 'modern',
        label: 'Modern',
        type: 'item',
        link: '/pages/invoices/modern'
      },
      {
        id: 'compact',
        label: 'Compact',
        type: 'item',
        link: '/pages/invoices/compact'
      }
    ]
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    type: 'item',
    icon: 'build',
    link: '/pages/maintenance'
  },
  {
    id: 'pricing',
    label: 'Pricing',
    type: 'collapsable',
    icon: 'attach_money',
    items: [
      {
        id: 'style-1',
        label: 'Style 1',
        type: 'item',
        link: '/pages/pricing/style-1'
      },
      {
        id: 'style-2',
        label: 'Style 2',
        type: 'item',
        link: '/pages/pricing/style-2'
      },
      {
        id: 'style-3',
        label: 'Style 3',
        type: 'item',
        link: '/pages/pricing/style-3'
      }
    ]
  },
  {
    id: 'profile',
    label: 'Profile',
    type: 'item',
    icon: 'person',
    link: '/pages/profile'
  },
  {
    id: 'search',
    label: 'Search',
    type: 'collapsable',
    icon: 'search',
    items: [
      {
        id: 'search-classic',
        label: 'Classic',
        type: 'item',
        link: '/pages/search/classic'
      },
      {
        id: 'search-modern',
        label: 'Modern',
        type: 'item',
        link: '/pages/search/modern'
      }
    ]
  },
  { id: 'faq', label: 'Faq', type: 'item', icon: 'help', link: '/pages/faq' },
  {
    id: 'knowledge-base',
    label: 'Knowledge Base',
    type: 'item',
    icon: 'import_contacts',
    link: '/pages/knowledge-base'
  },
  {
    id: 'angular-material',
    label: 'Angular Material',
    type: 'item',
    icon: 'ballot',
    link: '/ui/angular-material'
  },
  {
    id: 'cards',
    label: 'Cards',
    type: 'item',
    icon: 'crop_portrait',
    link: '/ui/cards'
  },
  {
    id: 'forms',
    label: 'Forms',
    type: 'item',
    icon: 'web_asset',
    link: '/ui/forms'
  },
  {
    id: 'icons',
    label: 'Icons',
    type: 'item',
    icon: 'photo',
    link: '/ui/icons'
  },
  {
    id: 'typography',
    label: 'Typography',
    type: 'item',
    icon: 'text_fields',
    link: '/ui/typography'
  },
  {
    id: 'helper-classes',
    label: 'Helper Classes',
    type: 'item',
    icon: 'help',
    link: '/ui/helper-classes'
  },
  {
    id: 'page-layouts',
    label: 'Page Layouts',
    type: 'collapsable',
    icon: 'view_quilt',
    items: [
      {
        id: 'carded',
        label: 'Carded',
        type: 'collapsable',
        badge: { label: '12', bg: '#525e8a', fg: '#FFFFFF' },
        items: [
          {
            id: 'full-width-1',
            label: 'Full Width #1',
            type: 'item',
            link: '/ui/page-layouts/carded/full-width-1'
          },
          {
            id: 'full-width-2',
            label: 'Full Width #2',
            type: 'item',
            link: '/ui/page-layouts/carded/full-width-2'
          },
          {
            id: 'full-width-tabbed-1',
            label: 'Full Width Tabbed #1',
            type: 'item',
            link: '/ui/page-layouts/carded/full-width-tabbed-1'
          },
          {
            id: 'full-width-tabbed-2',
            label: 'Full Width Tabbed #2',
            type: 'item',
            link: '/ui/page-layouts/carded/full-width-tabbed-2'
          },
          {
            id: 'left-sidebar-1',
            label: 'Left Sidebar #1',
            type: 'item',
            link: '/ui/page-layouts/carded/left-sidebar-1'
          },
          {
            id: 'left-sidebar-2',
            label: 'Left Sidebar #2',
            type: 'item',
            link: '/ui/page-layouts/carded/left-sidebar-2'
          },
          {
            id: 'left-sidebar-tabbed-1',
            label: 'Left Sidebar Tabbed #1',
            type: 'item',
            link: '/ui/page-layouts/carded/left-sidebar-tabbed-1'
          },
          {
            id: 'left-sidebar-tabbed-2',
            label: 'Left Sidebar Tabbed #2',
            type: 'item',
            link: '/ui/page-layouts/carded/left-sidebar-tabbed-2'
          },
          {
            id: 'right-sidebar-1',
            label: 'Right Sidebar #1',
            type: 'item',
            link: '/ui/page-layouts/carded/right-sidebar-1'
          },
          {
            id: 'right-sidebar-2',
            label: 'Right Sidebar #2',
            type: 'item',
            link: '/ui/page-layouts/carded/right-sidebar-2'
          },
          {
            id: 'right-sidebar-tabbed-1',
            label: 'Right Sidebar Tabbed #1',
            type: 'item',
            link: '/ui/page-layouts/carded/right-sidebar-tabbed-1'
          },
          {
            id: 'right-sidebar-tabbed-2',
            label: 'Right Sidebar Tabbed #2',
            type: 'item',
            link: '/ui/page-layouts/carded/right-sidebar-tabbed-2'
          }
        ]
      },
      {
        id: 'simple',
        label: 'Simple',
        type: 'collapsable',
        badge: { label: '10', bg: '#525e8a', fg: '#FFFFFF' },
        items: [
          {
            id: 'full-width-1',
            label: 'Full Width #1',
            type: 'item',
            link: '/ui/page-layouts/simple/full-width-1'
          },
          {
            id: 'full-width-tabbed-1',
            label: 'Full Width Tabbed #1',
            type: 'item',
            link: '/ui/page-layouts/simple/full-width-tabbed-1'
          },
          {
            id: 'left-sidebar-1',
            label: 'Left Sidebar #1',
            type: 'item',
            link: '/ui/page-layouts/simple/left-sidebar-1'
          },
          {
            id: 'left-sidebar-2',
            label: 'Left Sidebar #2',
            type: 'item',
            link: '/ui/page-layouts/simple/left-sidebar-2'
          },
          {
            id: 'left-sidebar-3',
            label: 'Left Sidebar #3',
            type: 'item',
            link: '/ui/page-layouts/simple/left-sidebar-3'
          },
          {
            id: 'left-sidebar-4',
            label: 'Left Sidebar #4',
            type: 'item',
            link: '/ui/page-layouts/simple/left-sidebar-4'
          },
          {
            id: 'right-sidebar-1',
            label: 'Right Sidebar #1',
            type: 'item',
            link: '/ui/page-layouts/simple/right-sidebar-1'
          },
          {
            id: 'right-sidebar-2',
            label: 'Right Sidebar #2',
            type: 'item',
            link: '/ui/page-layouts/simple/right-sidebar-2'
          },
          {
            id: 'right-sidebar-3',
            label: 'Right Sidebar #3',
            type: 'item',
            link: '/ui/page-layouts/simple/right-sidebar-3'
          },
          {
            id: 'right-sidebar-4',
            label: 'Right Sidebar #4',
            type: 'item',
            link: '/ui/page-layouts/simple/right-sidebar-4'
          }
        ]
      },
      {
        id: 'blank',
        label: 'Blank',
        type: 'item',
        link: '/ui/page-layouts/blank'
      }
    ]
  },
  {
    id: 'colors',
    label: 'Colors',
    type: 'item',
    icon: 'color_lens',
    link: '/ui/colors'
  },
  {
    id: 'changelog',
    label: 'Changelog',
    type: 'item',
    icon: 'update',
    link: '/documentation/changelog',
    badge: { label: '9.0.0', bg: '#EC0C8E', fg: '#FFFFFF' }
  },
  {
    id: 'getting-started',
    label: 'Getting Started',
    type: 'collapsable',
    icon: 'import_contacts',
    items: [
      {
        id: 'introduction',
        label: 'Introduction',
        type: 'item',
        link: '/documentation/getting-started/introduction'
      },
      {
        id: 'installation',
        label: 'Installation',
        type: 'item',
        link: '/documentation/getting-started/installation'
      }
    ]
  },
  {
    id: 'working-with-fuse',
    label: 'Working with Fuse',
    type: 'collapsable',
    icon: 'import_contacts',
    items: [
      {
        id: 'server',
        label: 'Server',
        type: 'item',
        link: '/documentation/working-with-fuse/server'
      },
      {
        id: 'production',
        label: 'Production',
        type: 'item',
        link: '/documentation/working-with-fuse/production'
      },
      {
        id: 'directory-structure',
        label: 'Directory Structure',
        type: 'item',
        link: '/documentation/working-with-fuse/directory-structure'
      },
      {
        id: 'updating-fuse',
        label: 'Updating Fuse',
        type: 'item',
        link: '/documentation/working-with-fuse/updating-fuse'
      },
      {
        id: 'multi-language',
        label: 'Multi Language',
        type: 'item',
        link: '/documentation/working-with-fuse/multi-language'
      },
      {
        id: 'material-theming',
        label: 'Material Theming',
        type: 'item',
        link: '/documentation/working-with-fuse/material-theming'
      },
      {
        id: 'theme-layouts',
        label: 'Theme Layouts',
        type: 'item',
        link: '/documentation/working-with-fuse/theme-layouts'
      },
      {
        id: 'page-layouts',
        label: 'Page Layouts',
        type: 'item',
        link: '/documentation/working-with-fuse/page-layouts'
      }
    ]
  },
  {
    id: 'components',
    label: 'Components',
    type: 'collapsable',
    icon: 'import_contacts',
    items: [
      {
        id: 'countdown',
        label: 'Countdown',
        type: 'item',
        link: '/documentation/components/countdown'
      },
      {
        id: 'highlight',
        label: 'Highlight',
        type: 'item',
        link: '/documentation/components/highlight'
      },
      {
        id: 'material-color-picker',
        label: 'Material Color Picker',
        type: 'item',
        link: '/documentation/components/material-color-picker'
      },
      {
        id: 'navigation',
        label: 'Navigation',
        type: 'item',
        link: '/documentation/components/navigation'
      },
      {
        id: 'progress-bar',
        label: 'Progress Bar',
        type: 'item',
        link: '/documentation/components/progress-bar'
      },
      {
        id: 'search-bar',
        label: 'Search Bar',
        type: 'item',
        link: '/documentation/components/search-bar'
      },
      {
        id: 'sidebar',
        label: 'Sidebar',
        type: 'item',
        link: '/documentation/components/sidebar'
      },
      {
        id: 'shortcuts',
        label: 'Shortcuts',
        type: 'item',
        link: '/documentation/components/shortcuts'
      },
      {
        id: 'widget',
        label: 'Widget',
        type: 'item',
        link: '/documentation/components/widget'
      }
    ]
  },
  {
    id: '3rd-party-components',
    label: '3rd Party Components',
    type: 'collapsable',
    icon: 'import_contacts',
    items: [
      {
        id: 'datatables',
        label: 'Datatables',
        type: 'collapsable',
        items: [
          {
            id: 'ngxdatatable',
            label: 'ngx-datatable',
            type: 'item',
            link: '/documentation/components-third-party/datatables/ngx-datatable'
          }
        ]
      },
      {
        id: 'google-maps',
        label: 'Google Maps',
        type: 'item',
        link: '/documentation/components-third-party/google-maps'
      }
    ]
  },
  {
    id: 'directives',
    label: 'Directives',
    type: 'collapsable',
    icon: 'import_contacts',
    items: [
      {
        id: 'fuse-if-on-dom',
        label: 'fuseIfOnDom',
        type: 'item',
        link: '/documentation/directives/fuse-if-on-dom'
      },
      {
        id: 'fuse-inner-scroll',
        label: 'fuseInnerScroll',
        type: 'item',
        link: '/documentation/directives/fuse-inner-scroll'
      },
      {
        id: 'fuse-mat-sidenav',
        label: 'fuseMatSidenav',
        type: 'item',
        link: '/documentation/directives/fuse-mat-sidenav'
      },
      {
        id: 'fuse-perfect-scrollbar',
        label: 'fusePerfectScrollbar',
        type: 'item',
        link: '/documentation/directives/fuse-perfect-scrollbar'
      }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    type: 'collapsable',
    icon: 'import_contacts',
    items: [
      {
        id: 'fuse-config',
        label: 'Fuse Config',
        type: 'item',
        link: '/documentation/services/fuse-config'
      },
      {
        id: 'fuse-splash-screen',
        label: 'Fuse Splash Screen',
        type: 'item',
        link: '/documentation/services/fuse-splash-screen'
      }
    ]
  }
];

export const navigation2: any[] = [
  {
    label: 'NPM',
    imageIcon: '/assets/batman.jpg',
    link: 'https://www.npmjs.com/package/ng-material-multilevel-menu',
    externalRedirect: true,
    hrefTargetType: '_blank' // _blank|_self|_parent|_top|framename
  },
  {
    label: 'Item 1 (with Font awesome icon)',
    faIcon: 'fab fa-500px',
    items: [
      {
        label: 'Item 1.1',
        link: '/item-1-1',
        faIcon: 'fab fa-accusoft'
      },
      {
        label: 'Item 1.2',
        faIcon: 'fab fa-accessible-icon',
        disabled: true,
        items: [
          {
            label: 'Item 1.2.1',
            link: '/item-1-2-1',
            faIcon: 'fa-allergies' // Font awesome default prefix is fas
          },
          {
            label: 'Item 1.2.2',
            faIcon: 'fas fa-ambulance',
            items: [
              {
                label: 'Item 1.2.2.1',
                faIcon: 'fas fa-anchor', // Still you can specify if you want to
                onSelected: function () {
                  console.log('Item 1.2.2.1');
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Item 2',
    icon: 'alarm',
    items: [
      {
        label: 'Item 2.1',
        link: '/item-2-1',
        icon: 'favorite_border',
        activeIcon: 'favorite',
        disabled: true
      },
      {
        label: 'Item 2.2',
        link: '/item-2-2',
        icon: 'favorite_border',
        activeIcon: 'favorite',
        navigationExtras: {
          queryParams: { order: 'popular', filter: 'new' }
        }
      }
    ]
  },
  {
    label: 'Item 3',
    icon: 'offline_pin',
    onSelected: function () {
      console.log('Item 3');
    }
  },
  {
    label: 'Item 4',
    link: '/item-4',
    icon: 'star_rate',
    hidden: true
  }
];
