import type { User } from './models/user'

export type Auth = {
    user: User
}

export interface RolePivot {
    model_type: string
    model_id: number
    role_id: number
}

export interface Role {
    id: number
    name: string
    guard_name: string
    created_at: string
    updated_at: string
    pivot?: RolePivot
}
