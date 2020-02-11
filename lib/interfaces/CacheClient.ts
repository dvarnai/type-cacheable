import {CacheDeserializer} from "./CacheDeserializer";

export interface CacheClient {
  defaultDeserializer: CacheDeserializer | null;
  get(cacheKey: string, fieldKey?: string): Promise<any>;
  set(cacheKey: string, value: any, ttl?: number): Promise<any>;
  del(cacheKey: string | string[]): Promise<any>;
  keys(pattern: string): Promise<string[]>;
  getClientTTL(): number;
}
