import { Injectable } from '@angular/core';
import { HttpService } from '../../../../../projects/my-library/src/lib/http/http.service';
import { BaseDataService } from '../../../../../projects/my-library/src/lib/http/base.data.service';
// import { ModelNameModel } from 'src.app.models/team1/'
import { ModelNameModel, ModelNameQueryRequest, ModelNameCommandRequest, ModelNameExcelResultModel, ModelNameExcelModel } from '../../../models/team1/model-name-1/model-name-1-tab-1.model';
import { OperationResult } from '../../../../../projects/my-library/src/lib/models/operation-result.model';

@Injectable({
  providedIn: 'root'
})
export class ScreenName2Service extends BaseDataService {

  constructor(override readonly httpService: HttpService) { 
    super(httpService, 'ApiName', 'ControllerName', '', false);
  }

  getMethodName1(req?: ModelNameQueryRequest): Promise<ModelNameModel[]> {
    return this.post<ModelNameModel[]>("GetMethodName", req)
  }

  //ModelNameQueryRequest de olabilir.
  saveMethodName1(req?: ModelNameCommandRequest): Promise<OperationResult> {
    return this.post<OperationResult>("SaveMethodName", req)
  }

  saveMethodNameExcel(model: ModelNameExcelModel): Promise<ModelNameExcelResultModel[]> {
    return this.post<ModelNameExcelResultModel[]>("SaveMethodNameExcel", model)
  }

  //ModelNameQueryRequest de olabilir.
  deleteMethodName1(model: ModelNameCommandRequest): Promise<OperationResult> {
    return this.post<OperationResult>("DeleteMethodName", model)
  }
}
