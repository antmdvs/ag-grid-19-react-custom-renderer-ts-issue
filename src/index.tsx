import * as React from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import { MyCellRenderer } from './MyCellRenderer';

const App = () => (
  <div>
    <AgGridReact rowData={[{ id: 'dummy' }]}>
      <AgGridColumn cellRendererFramework={MyCellRenderer} />
    </AgGridReact>
  </div>
);

render(<App />, document.getElementById('root'));
