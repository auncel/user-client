/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 16th April 2020 8:22 pm                           *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 16th April 2020 8:22 pm                          *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, { useState } from 'react';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import styles from './profile-field.module.scss';

interface IProfileFieldProps {
  type?: 'profile' | 'account';
  title: string;
  field: string;
  value: string;
}

const ProfileField = (props: IProfileFieldProps) => {
  const {
    type, title, field, value,
  } = props;
  const [editable, setEditable] = useState(false);

  function handleFieldSave() {
    setEditable(false);
  }

  return (
    <div className={styles.profileField}>
      <span>{title}</span>
      {editable ? <Input defaultValue={value} style={{ width: '300px' }} /> : <span className={styles.profileFieldValue}>{value}</span>}
      {editable
        ? <CheckOutlined onClick={handleFieldSave} />
        : <EditOutlined onClick={() => setEditable(true)} />}
    </div>
  );
};

export default ProfileField;
