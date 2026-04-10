export type StudentParent = {
    id: string; // UUID
    name: string | null;
    nik_number: string | null;
    address: string | null;
    phone: string | null;
    job: string | null;
    type: 'father' | 'mother' | 'guardian';
};
