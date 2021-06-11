import { OverlayContainer } from "@angular/cdk/overlay";
import { TestBed, async, getTestBed } from "@angular/core/testing"
import { ColorPickerService } from "./color-picker.service";


describe('ColorPickerService', () => {

    let injector: TestBed;
    let service: ColorPickerService;



    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [OverlayContainer]
        }).compileComponents()
            .then(() => {
                injector = getTestBed();
                service = injector.get(ColorPickerService);
            });
    }));

    it('should create the app', () => {
        expect(service).toBeTruthy();
    })
})