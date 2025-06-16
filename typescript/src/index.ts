interface Buyable {
    id: number,
    name: string,
    getInfo(): void,
    readonly price: 1000,
    discount?: number
}