import { Document } from "./document"

export type Candidate = {
    id: string
    user_id: number
    religion_id: number
    kk_number: string | null
    nik_number: string | null
    name: string | null
    nisn: string | null
    birth_date: string | null
    birth_place: string | null
    type: string | null
    address: string | null
    father_name: string | null
    mother_name: string | null
    religion: string | null
    gender: string | null
    progress: number
    birth_certificate_number: string | null
    documentable: Document[]
    created_at: string
    updated_at: string
}
