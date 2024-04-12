import { ReactElement } from 'react';
import { cn } from '@bem-react/classname';
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import {
  CrudTableSettings,
  MinimalDataModel,
  ResponsePaginated,
  useCrudTableHook,
} from '../../../../hooks/useCrudTableHook';

import { BaseCrudTableCheckboxCell } from './BaseCrudTableCheckboxCell';
import { BaseCrudTableSelectAllCheckbox } from './BaseCrudTableSelectAllCheckbox';

import '../styles/BaseCrudTable.scss';

const cnBaseCrudTable = cn('BaseCrudTable');

interface BaseCrudTableProps<T extends MinimalDataModel> {
  settings: CrudTableSettings<T>;
  data: ResponsePaginated<T>;
  currentPage: number;
  onDoubleClick?: (id: string) => void;
  className?: string;
  withRowSelection?: boolean;
}

export function BaseCrudTable<T extends MinimalDataModel>(
  props: BaseCrudTableProps<T>
): ReactElement {
  const { getHeader, getRowsData, renderGeneralActions } = useCrudTableHook({
    data: props.data,
    currentPage: props.currentPage,
    settings: props.settings,
  });

  const header = getHeader();
  const rows = getRowsData();
  const generalActions = renderGeneralActions();

  return (
    <div className={cnBaseCrudTable(undefined, [props.className])}>
      {!!generalActions.length && (
        <Stack direction={'row'}>{generalActions}</Stack>
      )}
      <div className={cnBaseCrudTable('TableWrapper')}>
        <Table>
          <TableHead>
            <TableRow>
              {props.withRowSelection && (
                <BaseCrudTableSelectAllCheckbox rows={rows} />
              )}
              {header.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  className={cnBaseCrudTable('Row', {
                    clickable: !!props.onDoubleClick,
                  })}
                  hover
                >
                  {props.withRowSelection && (
                    <BaseCrudTableCheckboxCell rowId={row.id} />
                  )}
                  {row.cells.map((cell, cellIdx, array) => (
                    <TableCell
                      key={cellIdx}
                      onDoubleClick={
                        props.onDoubleClick
                          ? () => {
                              props.onDoubleClick?.(row.id);
                            }
                          : undefined
                      }
                    >
                      {cellIdx === array.length - 1 ? (
                        <Stack direction={'row'}>{cell}</Stack>
                      ) : (
                        cell
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className={cnBaseCrudTable('NoData')}
                  colSpan={header.length}
                >
                  Данные не найдены
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
