import { FunctionComponent } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

import { IHintProps } from './types';

import style from './styles.module.scss';

const Hint: FunctionComponent<IHintProps> = (props) => {
  const { title = '', ...tooltipProps } = props;

  return (
    <Tooltip
      title={
        <>
          <InfoCircleOutlined className={style.icon} />
          {title}
        </>
      }
      {...tooltipProps}
    />
  );
};

export default Hint;
