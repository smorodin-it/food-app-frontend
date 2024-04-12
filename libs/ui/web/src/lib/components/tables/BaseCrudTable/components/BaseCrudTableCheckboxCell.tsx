import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { TableCell, Tooltip } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { CheckboxComponent } from '../../../inputs';
import { BaseCrudTableStore } from '../stores';

// import './styles/BaseCrudTableRow.scss';

const cnBaseCrudTableCheckboxCell = cn('BaseCrudTableCheckboxCell');

interface BaseCrudTableRowProps {
  rowId: string;
  className?: string;
}

export const BaseCrudTableCheckboxCell: FC<BaseCrudTableRowProps> = observer(
  (props) => {
    const handleSelectRow = (checked: boolean, rowId: string): void => {
      if (checked) {
        BaseCrudTableStore.addSelectedId(rowId);
      } else {
        BaseCrudTableStore.removeSelectedId(rowId);
      }
    };

    return (
      <TableCell
        className={cnBaseCrudTableCheckboxCell(undefined, [props.className])}
      >
        <Tooltip title={'Выбрать запись'}>
          <span>
            <CheckboxComponent
              checked={BaseCrudTableStore.selectedRows[props.rowId] ?? false}
              onChange={(_, checked) => {
                handleSelectRow(checked, props.rowId);
              }}
            />
          </span>
        </Tooltip>
      </TableCell>
    );
  }
);
