import { Schema } from '@pmee/common';

export const getCacheKey = (schema: Schema, input: string) => `${schema.type}${input}`;
