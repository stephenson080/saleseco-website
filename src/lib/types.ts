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

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface ContactFormData {
    name: string;
    email: string;
    inquiryType: string;
    message: string;
}
