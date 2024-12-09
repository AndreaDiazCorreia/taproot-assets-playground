import https from 'https';
import fs from 'fs';

export const TAPD_CONFIG = {
  REST_URL: process.env.TAPD_REST_URL || 'https://localhost:8089',
  MACAROON: process.env.TAPD_MACAROON_PATH ? 
    fs.readFileSync(process.env.TAPD_MACAROON_PATH).toString('hex') : '',
  TLS_CERT: process.env.TAPD_TLS_CERT_PATH ? 
    fs.readFileSync(process.env.TAPD_TLS_CERT_PATH) : undefined,
};

export const httpsAgent = TAPD_CONFIG.TLS_CERT ? 
  new https.Agent({
    ca: TAPD_CONFIG.TLS_CERT,
    rejectUnauthorized: false,
  }) : 
  undefined;

export const getHeaders = () => ({
  'Grpc-Metadata-macaroon': TAPD_CONFIG.MACAROON,
});