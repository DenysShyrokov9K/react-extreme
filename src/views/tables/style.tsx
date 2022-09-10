export interface SobjType {
    id?: number;
    name?: string;
    designation?: string;
    location?: string;
    age?: string;
    actions?: any;
}

export interface JsonDataType {
    name?: string,
    gender?: string,
    company?: string,
    age?: number,
}

export interface dataTableType {
    [index: number]: string
}