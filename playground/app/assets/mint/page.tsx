"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { assetSchema, type AssetFormData } from '@/lib/schemas';
import { taprootApi } from '@/lib/api/taproot';

export default function MintAsset() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<AssetFormData>({
    resolver: zodResolver(assetSchema),
    defaultValues: {
      name: '',
      ticker: '',
      supply: 1000,
      decimals: 8,
      metadata: '',
    },
  });

  const onSubmit = async (data: AssetFormData) => {
    try {
      setIsLoading(true);
      const response = await taprootApi.mintAsset(data);
      if (response.success) {
        toast({
          title: 'Success',
          description: 'Asset minted successfully',
        });
        form.reset();
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to mint asset',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Mint New Asset</h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input {...form.register('name')} />
            {form.formState.errors.name && (
              <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ticker</label>
            <Input {...form.register('ticker')} maxLength={5} />
            {form.formState.errors.ticker && (
              <p className="text-destructive text-sm mt-1">{form.formState.errors.ticker.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Supply</label>
            <Input
              type="number"
              {...form.register('supply', { valueAsNumber: true })}
            />
            {form.formState.errors.supply && (
              <p className="text-destructive text-sm mt-1">{form.formState.errors.supply.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Decimals</label>
            <Input
              type="number"
              {...form.register('decimals', { valueAsNumber: true })}
            />
            {form.formState.errors.decimals && (
              <p className="text-destructive text-sm mt-1">{form.formState.errors.decimals.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Metadata (Optional)</label>
            <Textarea {...form.register('metadata')} />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Minting...' : 'Mint Asset'}
          </Button>
        </form>
      </Card>
    </div>
  );
}