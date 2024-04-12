import { makeAutoObservable } from 'mobx';

export type BaseCrudTableStoreHashTable = Record<string, boolean>;

class BaseCrudTable {
  selectedRows: BaseCrudTableStoreHashTable = {};

  constructor() {
    makeAutoObservable(this);
  }

  initIds = (ids: BaseCrudTableStoreHashTable): void => {
    this.selectedRows = ids;
  };

  addIdsInBatch = (ids: BaseCrudTableStoreHashTable): void => {
    this.selectedRows = { ...this.selectedRows, ...ids };
  };

  removeIdsInBatch = (ids: BaseCrudTableStoreHashTable): void => {
    for (const key in ids) {
      this.selectedRows[key] = false;
    }
  };

  addSelectedId = (id: string): void => {
    this.selectedRows[id] = true;
  };

  removeSelectedId = (id: string): void => {
    this.selectedRows[id] = false;
  };

  get getSelectedIds(): string[] {
    return this.selectedRows
      ? Object.entries(this.selectedRows).reduce<string[]>(
          (result, [key, val]) => {
            if (val) {
              result.push(key);
            }
            return result;
          },
          []
        )
      : [];
  }

  clear = (): void => {
    this.initIds({});
  };
}

export const BaseCrudTableStore = new BaseCrudTable();
