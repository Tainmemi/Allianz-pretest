export class Country {
    name: NameDetail;
    capital: string[];
    subregion: string;
    population: number;
}

export interface NameDetail {
    common: string;
    official: string;
}
