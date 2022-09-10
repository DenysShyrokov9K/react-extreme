export interface ColorVariationType {
    id: number,
    eColor: string,
    value: string,
}

export interface NewEditEventType {
    title: string;
    allDay: boolean;
    start: Date;
    end: Date;
    color: string;
}

//EventData.tsx
export interface EventDatatType {
    title: string,
    allDay: boolean,
    start: Date,
    end: Date,
    color: string,
}