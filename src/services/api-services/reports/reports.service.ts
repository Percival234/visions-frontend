import type {
  Report,
  ReportCreate,
  ReportUpdate,
} from '@/types/entities/report.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';

import { createSearchParams } from '@/helpers/searchParams/createSearchParams';

import { apiWithAuth } from '@/api/api-instance';

import type { GetManyReportsOptions } from './reports.service.types';

class ReportsService {
  async getMany(options: GetManyReportsOptions): Promise<Report[]> {
    return (await apiWithAuth.get(`/reports?${createSearchParams(options)}`))
      .data;
  }

  async getById(id: string): Promise<Report> {
    return (await apiWithAuth.get(`/reports/${id}`)).data;
  }

  async create(ReportCreate: ReportCreate): ResponseMessage {
    return (await apiWithAuth.post('/reports', ReportCreate)).data;
  }

  async update(id: string, reportUpdate: ReportUpdate): ResponseMessage {
    return (await apiWithAuth.patch(`/reports/${id}`, reportUpdate)).data;
  }

  async delete(id: string): ResponseMessage {
    return (await apiWithAuth.delete(`/reports/${id}`)).data;
  }
}

export const reportsService = new ReportsService();
