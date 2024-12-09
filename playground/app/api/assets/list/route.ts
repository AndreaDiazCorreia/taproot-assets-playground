import { NextResponse } from 'next/server';
import axios from 'axios';
import { TAPD_CONFIG, httpsAgent, getHeaders } from '../../config';

export async function GET() {
  try {
    const response = await axios.get(
      `${TAPD_CONFIG.REST_URL}/v1/taproot-assets/assets`,
      {
        headers: getHeaders(),
        httpsAgent,
      }
    );

    return NextResponse.json({
      success: true,
      data: response.data.assets || [],
    });
  } catch (error) {
    console.error('Error listing assets:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to list assets',
    }, { status: 500 });
  }
}