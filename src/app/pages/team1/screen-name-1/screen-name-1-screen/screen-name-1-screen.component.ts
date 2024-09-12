import { Component, OnInit, ViewChild } from "@angular/core";
import { ScreenNameService } from "../../../../services/team1/screen-name/screen-name.service";
import { ModelNameQueryRequest } from "../../../../models/team1/model-name-1/model-name-1-tab-1.model";
import { MLangService, PopupService, ClaimService, Client } from  '@sahk/common'
import { ScreenName1Tab1Component } from "../components/tab-1/tab-1.component";
import { ScreenName1Tab2Component } from "../components/tab-2/tab-2.component";
import { Tab } from "../../../../models/team1/model-name-1/model-name-1.model";



@Component({
    selector: "screen-name-1-screen",
    templateUrl: "./screen-name-1-screen.component.html",
})
export class ScreenName1ScreenComponent implements OnInit {

    @ViewChild(ScreenName1Tab1Component, { static: false })
    gridTab1?: ScreenName1Tab1Component
    @ViewChild(ScreenName1Tab2Component, { static: false })
    gridTab2?: ScreenName1Tab2Component

    tabs?: Tab[]

    team1_ScreenName1_Tab1Claim: boolean = false
    team1_ScreenName1_Tab2Claim: boolean = false

    constructor(
        readonly mlangService: MLangService,
        readonly service: ScreenNameService,
        readonly popupService: PopupService,
        readonly claimService: ClaimService
    ) {}

    async ngOnInit() {
        await this.getClaim()

        this.tabs = [
            {
                Id: 1,
                Name: this.mlangService.get("Tab1Key"),
                permission: this.claimTab1,
                disabled: !this.claimTab1
            },
            {
                Id: 2,
                Name: this.mlangService.get("Tab2Key"),
                permission: this.claimTab2,
                disabled: !this.claimTab2
            }
        ]
    }

    async getClaim() {
        const claimNameTab1 = "Team1_ScreenName1_Tab1Key"
        const claimsTab1 = await this.claimService.userHasClaim(  // array dönecek
            Client.getInstance().sessionref(),
            claimNameTab1
        )
        this.team1_ScreenName1_Tab1Claim = claimsTab1.some((i) => i === claimNameTab1)

        const claimNameTab2 = "Team1_ScreenName1_Tab2Key"
        const claimsTab2 = await this.claimService.userHasClaim( // array dönecek
            Client.getInstance().sessionref(),
            claimNameTab2
        )
        this.team1_ScreenName1_Tab2Claim = claimsTab2.some((i) => i === claimNameTab2)
    }

    tabId: number = 1
    selectedChange(e) {
        this.tabId = e.addedItems[0].Id
    }

    async save()
    {
        try {
            if (this.tabId == 1) {
                const hasSaveClaim = true // await this.screenService.userHaveScreenActionClaim(p1, p2)
                
                if (!hasSaveClaim) {
                    this.popupService.warning(
                        Tab1Model1.Warning,
                        Tab1Model2.NotAccess
                    )
                    return
                }
                
                await this.gridTab1?.save()
            }

            if (this.tabId == 2) {
                await this.gridTab2?.save()
            }

            // if (this.tabId == 3) {
                // await this.gridTab3?.save()
            // }

        } catch (error) {
            this.popupService.error(error)
        }
    }
}