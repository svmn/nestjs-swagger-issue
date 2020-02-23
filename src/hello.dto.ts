export class NestedDto {
  something: string;
}

export class HelloResponseDto {
  public prop?: NestedDto;
}
