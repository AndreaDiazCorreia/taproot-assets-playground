import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Coins, List, Send, Globe2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Taproot Assets Playground
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore and interact with Taproot Assets through an intuitive interface.
          Mint tokens, manage assets, and interact with universes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Coins className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Mint Tokens</h2>
              <p className="text-sm text-gray-500">Create new Taproot assets with custom properties</p>
            </div>
          </div>
          <Button asChild className="mt-4 w-full">
            <Link href="/assets/mint">Get Started</Link>
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <List className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">List Assets</h2>
              <p className="text-sm text-gray-500">View and manage your Taproot assets</p>
            </div>
          </div>
          <Button asChild className="mt-4 w-full">
            <Link href="/assets/list">View Assets</Link>
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Send className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Transfer Assets</h2>
              <p className="text-sm text-gray-500">Send assets to other addresses</p>
            </div>
          </div>
          <Button asChild className="mt-4 w-full">
            <Link href="/assets/send">Transfer</Link>
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Globe2 className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Manage Universes</h2>
              <p className="text-sm text-gray-500">Sync and explore Taproot universes</p>
            </div>
          </div>
          <Button asChild className="mt-4 w-full">
            <Link href="/universes">Explore</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}