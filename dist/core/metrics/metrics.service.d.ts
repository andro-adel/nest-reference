import { Counter, Histogram } from 'prom-client';
export declare class MetricsService {
    private readonly registry;
    readonly httpRequestsTotal: Counter<string>;
    readonly httpRequestDurationSeconds: Histogram<string>;
    constructor();
    getMetrics(): Promise<string>;
}
