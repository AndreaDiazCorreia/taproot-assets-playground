import axios from "axios";
import {
  Asset,
  SendAssetRequest,
  GenerateAddressRequest,
  Universe,
} from "@/lib/types/taproot";

const api = axios.create({
  baseURL: "/api",
});

export const taprootApi = {
  // Token Management
  mintAsset: async (asset: Omit<Asset, "assetId" | "balance">) => {
    const response = await api.post<ApiResponse<Asset>>("/assets/mint", asset);
    return response.data;
  },

  listAssets: async () => {
    const response = await api.get<ApiResponse<Asset[]>>("/assets/list");
    return response.data;
  },

  sendAsset: async (request: SendAssetRequest) => {
    const response = await api.post<ApiResponse<void>>("/assets/send", request);
    return response.data;
  },

  generateAddress: async (request: GenerateAddressRequest) => {
    const response = await api.post<ApiResponse<string>>(
      "/assets/generate-address",
      request,
    );
    return response.data;
  },

  // Universe Management
  syncUniverse: async (universe: Universe) => {
    const response = await api.post<ApiResponse<void>>(
      "/universe/sync",
      universe,
    );
    return response.data;
  },

  getUniverseInfo: async (universeHost: string) => {
    const response = await api.get<ApiResponse<Universe>>(
      `/universe/info?universeHost=${universeHost}`,
    );
    return response.data;
  },
};
