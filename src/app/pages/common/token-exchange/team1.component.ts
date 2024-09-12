import { PageComponent } from "./page.component";


export abstract class Team1Component extends PageComponent {
    /**
     *
     */
    constructor(
        readonly _templateNames: any[] = []
    ) {
        super();
        
    }

    async save() {
        // 
    }

    async add() {
        // 
    }

    async delete() {
        // 
    }

    async exportExcelTemplate() {
        this.excelCreate("Excel_Sablonu", this._templateNames)
    }

    async excelCreate(name: string, dataSource: any[]) {

    }

    async fileChange(headersExcel: any, target: any) {

    }

    async checkHeaders(headersExcel: string | any[], headers: string | any) {
        return true
    }

    async importExcel(_model: any[]) {

    }
}