import {ColumnDef} from '@tanstack/react-table';
import {DataTableColumnHeader} from '../data-table/column-header';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'name',
    header: ({column}) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: 'metadata.project_lead',
    header: ({column}) => (
      <DataTableColumnHeader column={column} title="Project Lead" />
    ),
  },
  {
    accessorKey: 'metadata.pre_description',
    header: ({column}) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
];
