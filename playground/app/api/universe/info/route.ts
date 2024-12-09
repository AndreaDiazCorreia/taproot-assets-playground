import { NextResponse } from 'next/server';
import axios from 'axios';
import { TAPD_CONFIG, httpsAgent, getHeaders } from '../../config';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const universeHost = searchParams.get('universeHost');

    if (!universeHost) {
      return NextResponse.json({
        success: false,
        error: 'Universe host is required',
      }, { status: 400 });
    }

    const response = await axios.get(
      `${TAPD_CONFIG.REST_URL}/v1/taproot-assets/universe?universe_host=${universeHost}`,
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
    console.error('Error fetching universe info:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch universe info',
    }, { status: 500 });
  }
}