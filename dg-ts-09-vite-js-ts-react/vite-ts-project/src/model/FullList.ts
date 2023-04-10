import ListItem from "./ListItem";

interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObj: ListItem): void,
  removeItem(id: string): void,
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
      const stored_list: string | null = localStorage.getItem("my_list");

      if (typeof stored_list !== "string") return;

      const parsed_list: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(stored_list);

      parsed_list.forEach(itemObj => {
        const new_item_list = new ListItem(itemObj._id, itemObj._item, itemObj._checked);

        FullList.instance.addItem(new_item_list);

      });
  }

  save(): void {
    localStorage.setItem("my_list", JSON.stringify(this._list));
  }

  clearList(): void {
      this._list = [];
      this.save();
  }

  addItem(itemObj: ListItem): void {
      this._list.push(itemObj);
      this.save();
  }

  removeItem(id: string): void {
      this._list = this._list.filter(item => item.id !== id);
      this.save();
  }
}

