import { FunctionComponent } from 'react';
import { QRCode as QR } from 'antd';

import { IQRCodeProps } from './types';

const QRCode: FunctionComponent<IQRCodeProps> = (props) => {
  const { value = '', ...qrCodeProps } = props;
  return (
    <QR
      value={value}
      {...qrCodeProps}
    />
  );
};

export default QRCode;
