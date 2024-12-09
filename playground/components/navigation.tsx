"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Coins, List, Send, Globe2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Coins },
  { name: 'Mint Asset', href: '/assets/mint', icon: Coins },
  { name: 'List Assets', href: '/assets/list', icon: List },
  { name: 'Send Asset', href: '/assets/send', icon: Send },
  { name: 'Universes', href: '/universes', icon: Globe2 },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Coins className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-semibold text-foreground">Taproot Assets</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'inline-flex items-center px-1 pt-1 text-sm font-medium',
                      pathname === item.href
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-muted-foreground hover:border-b-2 hover:border-primary/50 hover:text-primary/80'
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}