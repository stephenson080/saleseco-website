export interface FormData {
    email: string;
    country: string;
    state: string;
    gender: string;
    interests: string[];
    budget: string;
    agreeToUpdates: boolean;
}

export interface Interest {
    id: string;
    label: string;
}
