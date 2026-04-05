import { DocumentType } from "./document_type"

export type Document = {
    id: number
    document_type_id: number
    name: string | null
    extension: string | null
    mime: string | null
    size: string | null
    documentable_type: string
    documentable_id: number
    document_type: DocumentType
}
