"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { sendAssetSchema, type SendAssetFormData } from '@/lib/schemas';
import { taprootApi } from '@/lib/api/taproot';
import { Asset } from '@/lib/types/taproot';

export default function SendAsset() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const preselectedAssetId = searchParams.get('assetId');

  const form = useForm<SendAssetFormData>({
    resolver: zodResolver(sendAssetSchema),
    defaultValues: {
      recipient: '',
      amount: 0,
      assetId: preselectedAssetId || '',
    },
  });

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await taprootApi.listAssets();
        if (response.success && response.data) {
          setAssets(response.data);
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to fetch assets',
          variant: 'destructive',
        });
      }
    };

    fetchAssets();
  }, [toast]);

  const onSubmit = async (data: SendAssetFormData) => {
    try {
      setIsLoading(true);
      const response = await taprootApi.sendAsset(data);
      if (response.success) {
        toast({
          title: 'Success',
          description: 'Asset sent successfully',
        });
        form.reset();
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send asset',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Send Asset</h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Asset</label>
            <Select
              value={form.watch('assetId')}
              onValueChange={(value) => form.setValue('assetId', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an asset" />
              </SelectTrigger>
              <SelectContent>
                {assets.map((asset) => (
                  <SelectItem key={asset.assetId} value={asset.assetId || ''}>
                    {asset.name} ({asset.ticker})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.assetId && (
              <p className="text-destructive text-sm mt-1">
                {form.formState.errors.assetId.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Recipient Address</label>
            <Input {...form.register('recipient')} />
            {form.formState.errors.recipient && (
              <p className="text-destructive text-sm mt-1">
                {form.formState.errors.recipient.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <Input
              type="number"
              step="any"
              {...form.register('amount', { valueAsNumber: true })}
            />
            {form.formState.errors.amount && (
              <p className="text-destructive text-sm mt-1">
                {form.formState.errors.amount.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Asset'}
          </Button>
        </form>
      </Card>
    </div>
  );
}