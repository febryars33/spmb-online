export * from './auth';

import type { Auth } from './auth';

export type AppPageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    name: string;
    auth: Auth;
    baseUrl: string;
    url: {
        base: string;
        asset: string;
    };
    [key: string]: unknown;
};
