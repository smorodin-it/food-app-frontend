import { ReactNode } from 'react';

import { CrudTableActions, PaginationDefaultSettings } from './constants';
import { CrudTableOptions, MinimalDataModel, RowObject } from './type';

type GetHeaderReturnType = () => string[];
type GetRowsDataReturnType = () => RowObject[];
type RenderGeneralActionsReturnType = () => ReactNode[];
type RenderCellActionsReturnType<DataModel> = (
  object: DataModel
) => ReactNode[];

type UseCrudTableHookReturnType<DataModel> = {
  getHeader: GetHeaderReturnType;
  getRowsData: GetRowsDataReturnType;
  renderGeneralActions: RenderGeneralActionsReturnType;
  renderCellActions: RenderCellActionsReturnType<DataModel>;
};

export function useCrudTableHook<DataModel extends MinimalDataModel>(
  options: CrudTableOptions<DataModel>
): UseCrudTableHookReturnType<DataModel> {
  const rowsPerPage = options.perPage ?? PaginationDefaultSettings.RowsPerPage;

  const renderGeneralActions = (): ReactNode[] => {
    return options.settings.actions.reduce<ReactNode[]>((result, action) => {
      if (
        action.type === CrudTableActions.Top &&
        (typeof action.access === 'undefined' ? true : action.access)
      ) {
        result.push(action.renderComponent());
      }

      return result;
    }, []);
  };

  const renderCellActions = (object: DataModel): ReactNode[] => {
    return options.settings.actions.reduce<ReactNode[]>((result, action) => {
      if (
        action.type === CrudTableActions.Cell &&
        (typeof action.access === 'undefined' ? true : action.access)
      ) {
        result.push(action.renderComponent(object));
      }
      return result;
    }, []);
  };

  // Table rows & fields generation functions

  const haveOneOfCellActions = !!options.settings.actions.filter(
    (action) => action.type === CrudTableActions.Cell
  ).length;

  const getHeader = (): string[] => {
    return options.settings.fields.reduce<string[]>(
      (result, field, idx, array) => {
        if (options.addNumberingColumn && idx === 0) {
          result.unshift('№');
        }

        result.push(field.header);

        if (haveOneOfCellActions && idx === array.length - 1) {
          result.push('Действия');
        }

        return result;
      },
      []
    );
  };

  const getRowsData = (): RowObject[] => {
    const fields = options.settings.fields;

    return options.data.list.map((row, index, rowList) => {
      const result: RowObject = {
        id: row.id,
        cells: [],
      };

      return fields.reduce<RowObject>((rowObj, cell, idx) => {
        if (options.addNumberingColumn && idx === 0) {
          rowObj.cells.push(
            index + 1 + rowsPerPage * (options.currentPage - 1)
          );
        }

        rowObj.cells.push(cell.render(rowList[index]));

        if (haveOneOfCellActions && idx === fields.length - 1) {
          rowObj.cells.push(renderCellActions(row));
        }

        return rowObj;
      }, result);
    });
  };

  return {
    getHeader,
    getRowsData,
    renderGeneralActions,
    renderCellActions,
  };
}
