import { FunctionComponent } from 'react';
import { Spin } from 'antd';

import { ISpinProps } from './types';

const Spinner: FunctionComponent<ISpinProps> = (props) => {
  return <Spin {...props} />;
};

export default Spinner;
