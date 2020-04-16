/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 16th April 2020 8:01 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 16th April 2020 8:01 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React from 'react';
import { Row, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Card } from '../../../components/Card';
import { Image } from '../../../components';
import defaultAvatarImg from '../../../assets/images/user.png';

interface IAvatarSettingProps {
  avatar?: string;
}

const AvatarSetting = (props: IAvatarSettingProps) => {
  const { avatar } = props;
  return (
    <Card title="头像" plain>
      <Row justify="space-around" style={{ padding: '20px 150px' }}>
        <Image src={avatar ?? defaultAvatarImg} width={120} />

        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="http://api.auncel.top/image/upload"
          onChange={() => {}}
        >
          <PlusOutlined />
        </Upload>
      </Row>
    </Card>
  );
};

export default AvatarSetting;
