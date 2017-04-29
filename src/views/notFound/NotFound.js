import React from 'react';

import ColumnCentered from '../../components/ui/ColumnCentered';
import ErrorMessage from '../../components/ui/ErrorMessage';

const NotFound = (props) => (
  <ColumnCentered>
    <ErrorMessage code={ 404 } />
  </ColumnCentered>
);

export default NotFound;
