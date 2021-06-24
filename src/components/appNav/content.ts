export type NavItem={
  key: string,
  type?: string,
  label: string,
  children?: NavItem[]
}
export const NAV_LIST= [
  {key: '/home', type: 'calendar', label: 'home'},
  {key: '/list', type: 'email', label: 'list', children: [
    {key: '/detail', label: 'detail'},
    {key: '/about', label: 'about'},
  ]},
]
