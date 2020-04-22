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
import React, { useState, useCallback, ChangeEvent } from 'react';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Input, message } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import styles from './profile-field.module.scss';
import UserApi from '../../../network/UserApi';
import { RootState } from '../../../store';

interface IProfileFieldProps {
  userId: number;
  type?: 'profile' | 'account';
  title: string;
  field: string;
  value: string;
}

const userApi = new UserApi();

const ProfileField: React.FC<IProfileFieldProps> = (props) => {
  const {
    type, title, field, value, userId,
  } = props;
  const [editable, setEditable] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<string>('');

  const handleFieldSave = useCallback(async () => {
    try {
      const respData = await userApi.put<boolean>({ id: userId, [field]: fieldValue });
      message.success(respData.msg ?? `更新${title}成功`);
    } catch (err) {
      message.error(err);
    } finally {
      setEditable(false);
    }
  }, [field, fieldValue, userId]);

  const handleEdit = useCallback(() => { setEditable(true); }, []);

  const handleChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(evt.target.value);
    }, [],
  );
  return (
    <div className={styles.profileField}>
      <span>{title}</span>
      {editable ? (
        <Input
          defaultValue={value}
          value={fieldValue}
          style={{ width: '300px' }}
          onChange={handleChange}
        />
      ) : <span className={styles.profileFieldValue}>{value}</span>}
      {editable
        ? <CheckOutlined onClick={handleFieldSave} />
        : <EditOutlined onClick={handleEdit} />}
    </div>
  );
};

export default ProfileField;
