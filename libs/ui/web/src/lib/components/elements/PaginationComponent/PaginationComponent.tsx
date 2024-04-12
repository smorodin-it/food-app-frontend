import { ChangeEvent, ComponentProps, FC } from 'react';
import { cn } from '@bem-react/classname';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Pagination, PaginationItem } from '@mui/material';

// import './styles/PaginationComponent.scss';

const cnPaginationComponent = cn('PaginationComponent');

type PaginationComponentProps = Omit<
  ComponentProps<typeof Pagination>,
  'renderItem' | 'onChange' | 'count'
> & {
  handlePaginationChange: (value: number) => void;
  totalItems: number;
  itemsPerPage: number;
};

export const PaginationComponent: FC<PaginationComponentProps> = (props) => {
  const {
    handlePaginationChange: handlePaginationChangeProp,
    itemsPerPage: itemsPerPageProp,
    totalItems: totalItemsProp,
    ...rest
  } = props;

  const totalPages = Math.ceil(totalItemsProp / itemsPerPageProp);

  const handleChange = (_: ChangeEvent<unknown>, page: number): void => {
    if (page !== props.page) {
      handlePaginationChangeProp(page);
    }
  };

  return props.totalItems > props.itemsPerPage ? (
    <Pagination
      {...rest}
      count={totalPages}
      onChange={handleChange}
      className={cnPaginationComponent(undefined, [props.className])}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBack, next: ArrowForward }}
          {...item}
        />
      )}
    />
  ) : null;
};
