export class OptionalNestedDto {
  prop: string;
}

export class HelloResponseDto {
  public optionalProperty?: OptionalNestedDto;
}
