import { ReactNode } from 'react';

import { CrudTableActions } from './constants';

export interface MinimalDataModel extends Record<string, unknown> {
  id: string;
}

export interface ResponsePaginated<Data> {
  list: Data[];
  count: number;
}

type GeneralActionType = {
  /**
   * Проверяет есть ли доступ к этому действию у пользователя.
   * @default true
   */
  access?: boolean;
};

type TopActionType = {
  /**
   * Тип для добавления компонентов сверху таблицы
   */
  type: typeof CrudTableActions.Top;

  /**
   * Компонент для рендера
   */
  renderComponent: () => ReactNode;
};

type CellActionType<DataModel> = {
  /**
   * Тип для добавления компонентов в строке, в колонке действий в таблице
   */
  type: typeof CrudTableActions.Cell;

  /**
   * Компонент для рендера
   */
  renderComponent: (object: DataModel) => ReactNode;
};

type Action<DataModel extends MinimalDataModel> = GeneralActionType &
  (TopActionType | CellActionType<DataModel>);

export interface RowObject extends Record<string, unknown> {
  id: string;
  cells: ReactNode[];
}

interface Field<DataModel extends MinimalDataModel> {
  /**
   * Заголовок колонки в таблице
   */
  header: string;

  /**
   * Функиця которая отрисовывает элемент в ячейке таблицы
   * @param object - Объект с данными который возвращает API
   */
  render: (object: DataModel) => ReactNode;
}

export interface CrudTableSettings<DataModel extends MinimalDataModel> {
  /**
   * Дейсвия которые можно осуществлять с данными в таблице (добавление, редактирование, детальный просмотр, удаление)
   */
  actions: Action<DataModel>[];

  /**
   * Поля таблицы
   */
  fields: Field<DataModel>[];
}

export interface CrudTableOptions<DataModel extends MinimalDataModel> {
  currentPage: number;

  /**
   * Настройки таблицы
   */
  settings: CrudTableSettings<DataModel>;

  /**
   * Store с которым будет работать таблица
   */
  data: ResponsePaginated<DataModel>;

  /**
   * Количество записей на странице
   */
  perPage?: number;

  /**
   * Добавить колонку с нумирацией строк
   */
  addNumberingColumn?: boolean;
}
