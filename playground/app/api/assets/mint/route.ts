import { NextResponse } from 'next/server';
import axios from 'axios';
import { TAPD_CONFIG, httpsAgent, getHeaders } from '../../config';
import { Asset } from '@/lib/types/taproot';

export async function POST(request: Request) {
  try {
    const asset: Omit<Asset, 'assetId' | 'balance'> = await request.json();
    
    const response = await axios.post(
      `${TAPD_CONFIG.REST_URL}/v1/taproot-assets/assets`,
      asset,
      {
        headers: getHeaders(),
        httpsAgent,
      }
    );

    return NextResponse.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error('Error minting asset:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to mint asset',
    }, { status: 500 });
  }
}