import * as React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererReactComp } from 'ag-grid-react/lib/interfaces';

export class MyCellRenderer extends React.Component<ICellRendererParams>
  implements ICellRendererReactComp {

  // This class will fail to compile unless the `agInit` method below is uncommented.
  //
  // The docs say that `agInit` is required for Angular & Polymer, but NOT REACT:
  // https://www.ag-grid.com/javascript-grid-cell-rendering-components
  // 
  // However, `agInit` seems to have been added as a non-optional field to the TypeScript interface here:
  // https://github.com/ag-grid/ag-grid/commit/66891164d6c7952f0574c6e3ebcc1f0a95a427f7#diff-b4197d2ae9b291cc4918e217aeddbc00R22
  // and this is affecting React as well.
  //
  // public agInit() {
  //   throw new Error('This method is not used in React! But it's now required in the type declaration?!');
  // }

  public refresh() {
    return true;
  }

  public render() {
    return 'Foo';
  }
}
