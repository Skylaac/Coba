'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLinks from '@/app/ui/dashboard/nav-links';
import {
  StarIcon,
  InformationCircleIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  {
    label: 'Review',
    href: '/review',
    icon: <StarIcon className="w-6 h-6" />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <InformationCircleIcon className="w-6 h-6" />,
  },
  {
    label: 'Detail',
    href: '/detail',
    icon: <InformationCircleIcon className="w-6 h-6" />,
  },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-orange-500 text-white">
      <Link
        className="mb-6 flex h-20 items-end justify-start rounded-md bg-yellow-400 p-4 md:h-24"
        href="/"
      >
        <span className="text-2xl font-bold text-black">🧃 LolMart</span>
      </Link>

      <nav className="flex grow flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
              pathname === item.href
                ? 'bg-yellow-300 text-black'
                : 'hover:bg-yellow-200 hover:text-black'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}

        <div className="flex-1" />

        <form>
          <button className="flex w-full items-center gap-3 rounded-xl bg-yellow-100 px-4 py-3 text-sm font-semibold text-black hover:bg-yellow-300">
            <PowerIcon className="w-6 h-6" />
            Sign Out
          </button>
        </form>
      </nav>
    </div>
  );
}