import type { CandidateReviewType } from "./candidate_review_type";

export type ReviewType = {
    id: number;
    name: string;
    description: string | null;
    color: string;
    pivot: CandidateReviewType
};
