import { ComponentProps, FC } from 'react';
import { cn } from '@bem-react/classname';
import { Fade, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { PaginationComponent } from '../../../surfaces';
import { BaseCrudTableStore } from '../stores';

import { BaseCrudTableSelectedCounter } from './BaseCrudTableSelectedCounter';

import '../styles/BaseCrudTableCounterPagination.scss';

const cnBaseCrudTableCounterPagination = cn('BaseCrudTableCounterPagination');

interface BaseCrudTableCounterPaginationProps
  extends ComponentProps<typeof PaginationComponent> {
  className?: string;
}

export const BaseCrudTableCounterPagination: FC<BaseCrudTableCounterPaginationProps> =
  observer((props) => {
    const hasSelectedRows = !!BaseCrudTableStore.getSelectedIds.length;

    return (
      <Stack
        className={cnBaseCrudTableCounterPagination(undefined, [
          props.className,
        ])}
        direction={'row'}
        justifyContent={hasSelectedRows ? 'space-between' : 'flex-end'}
        alignItems={'center'}
      >
        {hasSelectedRows && (
          <Fade in>
            <span>
              <BaseCrudTableSelectedCounter totalItems={props.totalItems} />
            </span>
          </Fade>
        )}
        <PaginationComponent
          page={props.page}
          totalItems={props.totalItems}
          itemsPerPage={props.itemsPerPage}
          handlePaginationChange={props.handlePaginationChange}
        />
      </Stack>
    );
  });
