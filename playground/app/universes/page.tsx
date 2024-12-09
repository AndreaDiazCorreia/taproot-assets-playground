"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { universeSchema, type UniverseFormData } from '@/lib/schemas';
import { taprootApi } from '@/lib/api/taproot';
import { Universe } from '@/lib/types/taproot';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function UniverseManagement() {
  const [isLoading, setIsLoading] = useState(false);
  const [universeInfo, setUniverseInfo] = useState<Universe | null>(null);
  const { toast } = useToast();

  const syncForm = useForm<UniverseFormData>({
    resolver: zodResolver(universeSchema),
    defaultValues: {
      universeHost: '',
      groupKey: '',
    },
  });

  const queryForm = useForm<Pick<UniverseFormData, 'universeHost'>>({
    resolver: zodResolver(universeSchema.pick({ universeHost: true })),
    defaultValues: {
      universeHost: '',
    },
  });

  const onSync = async (data: UniverseFormData) => {
    try {
      setIsLoading(true);
      const response = await taprootApi.syncUniverse(data);
      if (response.success) {
        toast({
          title: 'Success',
          description: 'Universe synced successfully',
        });
        syncForm.reset();
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to sync universe',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onQuery = async (data: Pick<UniverseFormData, 'universeHost'>) => {
    try {
      setIsLoading(true);
      const response = await taprootApi.getUniverseInfo(data.universeHost);
      if (response.success && response.data) {
        setUniverseInfo(response.data);
        toast({
          title: 'Success',
          description: 'Universe information retrieved',
        });
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to fetch universe info',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Tabs defaultValue="sync" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sync">Sync Universe</TabsTrigger>
          <TabsTrigger value="query">Query Universe</TabsTrigger>
        </TabsList>

        <TabsContent value="sync">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Sync Universe</h2>
            <form onSubmit={syncForm.handleSubmit(onSync)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Universe Host</label>
                <Input {...syncForm.register('universeHost')} />
                {syncForm.formState.errors.universeHost && (
                  <p className="text-destructive text-sm mt-1">
                    {syncForm.formState.errors.universeHost.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Group Key (Optional)</label>
                <Input {...syncForm.register('groupKey')} />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Syncing...' : 'Sync Universe'}
              </Button>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="query">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Query Universe</h2>
            <form onSubmit={queryForm.handleSubmit(onQuery)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Universe Host</label>
                <Input {...queryForm.register('universeHost')} />
                {queryForm.formState.errors.universeHost && (
                  <p className="text-destructive text-sm mt-1">
                    {queryForm.formState.errors.universeHost.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Querying...' : 'Query Universe'}
              </Button>
            </form>

            {universeInfo && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold">Universe Information</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap break-words">
                    {JSON.stringify(universeInfo, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}