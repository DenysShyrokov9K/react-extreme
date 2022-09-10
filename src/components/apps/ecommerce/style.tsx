export interface ShopitemsType {
    title: string,
    category: string,
    price: string,
    colors: ((theme: any) => any)[],
    photo: any,
    id: number,
    star: number[],
}