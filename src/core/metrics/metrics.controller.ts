import { Controller, Get, Header } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller({ path: 'metrics', version: '1' })
export class MetricsController {
  constructor(private readonly metrics: MetricsService) {}

  @Get()
  @Header('Content-Type', 'text/plain')
  async getMetrics() {
    return this.metrics.getMetrics();
  }
}
