export interface PaginationMetadata {
  page: number
  perPage: number
  totalItems: number
  totalPages: number 
}

export interface PaginationResponse {
  metadata: PaginationMetadata
}