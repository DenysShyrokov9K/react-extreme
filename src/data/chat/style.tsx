export interface ChatDataType{
    id: number,
    name: string,
    status: string,
    thumb: any,
    recent: boolean,
    excerpt: string
    chatHistory: [
      {
        0: {
          from: string[],
          to: string[],
        },
        1: {
          from: string[],
          to: string[],
        },
      },
    ],
}