/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import InsightsTracker from 'insights-kit';

declare global {
    interface Window {
        Insights: InsightsTracker
    }
}
declare module 'insights-kit' {
    export interface IngishtsTrackerOptions {
        trackingHost: string;
    }
    export type InsightsEvent = {
        type: "page-views";
    } | {
        type: "click";
        meta: {
            title: string;
            source: string;
            value: string;
        };
    };
    export default class IngishtsTracker {
        private session;
        private trackingHost;
        constructor(options: IngishtsTrackerOptions);
        createSession(): Promise<string | undefined>;
        track(event: InsightsEvent): Promise<void>;
    }
}

