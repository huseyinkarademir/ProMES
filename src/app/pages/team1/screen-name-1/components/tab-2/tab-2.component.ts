import { Component, OnInit } from "@angular/core";
import { ScreenNameService } from "../../../../../services/team1/screen-name/screen-name.service";
import { ModelNameQueryRequest } from "../../../../../models/team1/model-name-1/model-name-1-tab-1.model";
import { MLangService, PopupService } from  '@sahk/common'



@Component({
    selector: "screen-name-1-screen",
    templateUrl: "./screen-name-1-screen.component.html",
})
export class ScreenName1Tab2Component implements OnInit {

    updatedRowsRef: number[] = []

    /**
     *
     */
    constructor(
        readonly mlangService: MLangService,
        readonly service: ScreenNameService,
        readonly popupService: PopupService
    ) {}

    async ngOnInit() {
        await this.getData()
    }

    async getData() {
        let req = {} as ModelNameQueryRequest

        await this.service.getMethodName1(req)
    }

    onRowUpdated(event: any) {
        // Tabloda değişiklik yapılırsa
        if (!this.updatedRowsRef.includes(event.key)) {
            // Güncellenmiş satırlar arasında yoksa
            this.updatedRowsRef.push(event.key)
        }
    }

    async save()
    {
        if (this.updatedRowsRef.length == 0) {
            this.popupService.info(
                this.mlangService.get("NoUpdateTitle"),
                this.mlangService.get("NoUpdateInfo"),
            );
            return;
        }

        await this.getData()
        return
    }
}