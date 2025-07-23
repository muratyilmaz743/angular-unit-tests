import { TestBed } from "@angular/core/testing";
import {UtilsService} from "./utils.service";

describe('UtilsService', () => {
  let utilsService: UtilsService;

  beforeEach(() => {
    utilsService = new UtilsService();
  });

  it('should create utils service', () => {
    expect(utilsService).toBeTruthy();
  });

  describe('range', () => {
    it('should returns correct array of 1 - 5', () => {
      const results = utilsService.range(1,6);
      expect(results).toEqual([1,2,3,4,5]);
    });

    it('should returns correct array of 41 - 45', () => {
      const results = utilsService.range(41, 46);
      expect(results).toEqual([41,42,43,44,45]);
    });
  })
});
