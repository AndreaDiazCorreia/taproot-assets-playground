"use client";

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { taprootApi } from '@/lib/api/taproot';
import { Asset } from '@/lib/types/taproot';
import { Send, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ListAssets() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchAssets = async () => {
    try {
      setIsLoading(true);
      const response = await taprootApi.listAssets();
      if (response.success && response.data) {
        setAssets(response.data);
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to fetch assets',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Assets</h1>
        <Button onClick={fetchAssets} variant="outline" disabled={isLoading}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {isLoading ? (
        <Card className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-4 bg-muted rounded w-5/6" />
          </div>
        </Card>
      ) : assets.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">No assets found</p>
          <Button asChild className="mt-4">
            <Link href="/assets/mint">Mint New Asset</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {assets.map((asset) => (
            <Card key={asset.assetId} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{asset.name}</h3>
                  <p className="text-sm text-muted-foreground">{asset.ticker}</p>
                </div>
                <Button asChild size="sm" variant="outline">
                  <Link href={`/assets/send?assetId=${asset.assetId}`}>
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Link>
                </Button>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Supply:</span>
                  <span>{asset.supply}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Decimals:</span>
                  <span>{asset.decimals}</span>
                </div>
                {asset.balance !== undefined && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Balance:</span>
                    <span>{asset.balance}</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}