export declare enum OperationResult {
    Exception = 0,
    Success = 1,
    Error = 2,
    DublicateRecord = 3,
    Other = 4,
    Warning = 5,
    ByPass = 6
}

export declare class OperationResult {
    OperationStatus: OperationStatus
    readonly OperationMessage: string
    DetailMessage?: string
    ID?: number
    /**
     *
     */
    constructor(OperationStatus: OperationStatus, OperationMessage: OperationMessage);
}