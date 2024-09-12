export interface ModelNameModel {
    ID: number
    Name: string
    IsActive: boolean
}

export interface ModelNameSaveModel {
    Name: string
    IsActive: boolean
}

export interface ModelNameQueryRequest {}

export interface ModelNameCommandRequest {
    ModelNameSaveList: ModelNameSaveModel[]
}

export interface ModelNameExcelModel {
    Name: string
    IsActive: boolean
    OperationDate: string
}

// property lere başlangıç değeri de atanarak sorun çözülebilir
export class ModelNameExcelResultModel {
    ErrorValidation?: string
    ExplanationRecord?: string
    ExplanationError?: string
}

export enum ModelTypeEnum {
    enum1=1,
    enum2=2,
    enum3=3
}