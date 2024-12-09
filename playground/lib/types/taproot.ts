export interface Asset {
  name: string;
  ticker: string;
  supply: number;
  decimals: number;
  metadata?: string;
  assetId?: string;
  balance?: number;
}

export interface Universe {
  universeHost: string;
  groupKey?: string;
  assets?: Asset[];
}

export interface SendAssetRequest {
  recipient: string;
  amount: number;
  assetId: string;
}

export interface GenerateAddressRequest {
  assetId: string;
  amount: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
