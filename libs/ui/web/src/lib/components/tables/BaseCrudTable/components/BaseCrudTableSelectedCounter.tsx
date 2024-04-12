import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { BaseCrudTableStore } from '../stores';

const cnBaseCrudTableSelectedCounter = cn('BaseCrudTableSelectedCounter');

interface BaseCrudTableSelectedCounterProps {
  totalItems: number;
  className?: string;
}

export const BaseCrudTableSelectedCounter: FC<BaseCrudTableSelectedCounterProps> =
  observer((props) => {
    return (
      <Typography
        className={cnBaseCrudTableSelectedCounter(undefined, [props.className])}
      >
        {`Выбрано ${BaseCrudTableStore.getSelectedIds.length} из ${props.totalItems}`}
      </Typography>
    );
  });
