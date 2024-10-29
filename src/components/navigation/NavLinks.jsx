import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Team', href: '/team', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Calendar', href: '/calendar', current: false },
]

export default function NavLinks({ mobile = false }) {
  const Component = mobile ? 'a' : Link

  return (
    <div className={mobile ? "space-y-1 px-2 pb-3 pt-2" : "hidden sm:ml-6 sm:block"}>
      <div className={mobile ? "" : "flex space-x-4"}>
        {navigation.map((item) => (
          <Component
            key={item.name}
            to={item.href}
            href={item.href}
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium',
              mobile ? 'block' : ''
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Component>
        ))}
      </div>
    </div>
  )
}