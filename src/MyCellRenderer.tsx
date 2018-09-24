import * as React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererReactComp } from 'ag-grid-react/lib/interfaces';

export class MyCellRenderer extends React.Component<ICellRendererParams>
  implements ICellRendererReactComp {
  public render() {
    return 'Foo';
  }
}
