import Buyable from "./Buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    //геттер
    get items(): Buyable[] {
        return [...this._items];

    }

    sum(discount?: number): number {
        let sum = [...this._items].reduce((sum, next) => sum + next.price, 0);
        if (discount){
            return sum - (sum * (discount/100));
        }
        return sum;
    }

    delete(id: number): void {
        const idx = this._items.findIndex((elem) => elem.id === id);
        this._items.splice(idx, 1);
    }

}