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
import React, {
  useState, useCallback, ChangeEvent, useEffect,
} from 'react';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Input, message } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import md5 from 'md5';
import styles from './profile-field.module.scss';
import UserApi from '../../../network/UserApi';
import UserAuthApi from '../../../network/UserAuthApi';
import { updateUser } from '../../../store/user/actions';

const connector = connect(null, {
  updateUser,
});

type PropsWithRedux = ConnectedProps<typeof connector>;

interface IProfileFieldProps {
  userId: number;
  type?: 'profile' | 'account';
  title: string;
  field: string;
  value: string;
  onSuccess?: () => void;
}

const userApi = new UserApi();

const ProfileField: React.FC<IProfileFieldProps & PropsWithRedux> = (props) => {
  const {
    type, title, field, value, userId, updateUser, onSuccess,
  } = props;
  const [editable, setEditable] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<string>('');

  const handleFieldSave = useCallback(async () => {
    try {
      if (type === 'profile') {
        const partialUser = { id: userId, [field]: fieldValue };
        await userApi.put<boolean>(partialUser);
        message.success(`更新${title}成功`);
        updateUser(partialUser);
      } else {
        let value = fieldValue;
        if (field === 'credential') {
          value = md5(`${fieldValue}salt`);
        }
        await new UserAuthApi().put({ [field]: value });
        message.success(`更新${title}成功`);
      }
      // eslint-disable-next-line no-unused-expressions
      onSuccess && onSuccess();
    } catch (err) {
      message.error(err.toString());
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

  useEffect(() => {
    setFieldValue(value);
  }, [value]);

  return (
    <div className={styles.profileField}>
      <span className={styles.profileFieldTitle}>{title}</span>
      {editable ? (
        <Input
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

export default connector(ProfileField);
