import { NextResponse } from 'next/server';
import axios from 'axios';
import { TAPD_CONFIG, httpsAgent, getHeaders } from '../../config';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const response = await axios.post(
      `${TAPD_CONFIG.REST_URL}/v1/taproot-assets/send`,
      data,
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
    console.error('Error sending asset:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to send asset',
    }, { status: 500 });
  }
}