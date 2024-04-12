import { ChangeEvent, FC } from 'react';
import { cn } from '@bem-react/classname';
import { TableCell, Tooltip } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { RowObject } from '../../../../hooks/useCrudTableHook';
import { CheckboxComponent } from '../../../inputs';
import { BaseCrudTableStore, BaseCrudTableStoreHashTable } from '../stores';

// import './styles/BaseCrudTableSelectAllCheckbox.scss';

const cnBaseCrudTableSelectAllCheckbox = cn('BaseCrudTableSelectAllCheckbox');

interface BaseCrudTableSelectAllCheckboxProps {
  rows: RowObject[];
  className?: string;
}

export const BaseCrudTableSelectAllCheckbox: FC<BaseCrudTableSelectAllCheckboxProps> =
  observer((props) => {
    const idsOnPage = props.rows.reduce<BaseCrudTableStoreHashTable>(
      (result, currEl) => {
        result[currEl.id] = true;
        return result;
      },
      {}
    );

    const handleSelectAll = (_: ChangeEvent, checked: boolean): void => {
      if (checked) {
        BaseCrudTableStore.addIdsInBatch(idsOnPage);
      } else {
        BaseCrudTableStore.removeIdsInBatch(idsOnPage);
      }
    };

    const isAllRowsOnPageSelected = (): boolean => {
      let result = true;

      for (const id in idsOnPage) {
        if (!BaseCrudTableStore.selectedRows[id]) {
          result = false;
          break;
        }
      }

      return result;
    };

    return (
      <TableCell
        className={cnBaseCrudTableSelectAllCheckbox(undefined, [
          props.className,
        ])}
      >
        <Tooltip title={'Выбрать всё'}>
          <span>
            <CheckboxComponent
              checked={isAllRowsOnPageSelected()}
              onChange={handleSelectAll}
            />
          </span>
        </Tooltip>
      </TableCell>
    );
  });
