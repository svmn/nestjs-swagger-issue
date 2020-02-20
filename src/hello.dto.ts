export class OptionalNestedDto {
  prop: OptionalEnum;
}

export enum OptionalEnum {
  ZERO
}

export class HelloResponseDto {
  public optionalProperty?: OptionalNestedDto[];
}
