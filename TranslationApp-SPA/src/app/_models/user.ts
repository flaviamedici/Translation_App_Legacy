import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    profession: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    languages: string;
    introduction?: string;
    experience?: string;
    photos?: Photo[];
}

