/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Sunday, 19th April 2020 3:32 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Sunday, 19th April 2020 3:32 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

interface IEditorProps {
  lang: string;
  value: string;
}

export const Editor: React.FC<IEditorProps> = (props) => {
  const { value, lang } = props;
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = monaco.editor.create(editorRef.current!, {
      value,
      language: lang,
      lineNumbers: 'on',
      scrollbar: {
        horizontal: 'visible',
      },
      lineHeight: 24,
    });
  });
  return (
    <div style={{ width: '50%', height: '350px' }}>
      <div style={{ height: '350px' }} ref={editorRef} />
    </div>
  );
};

export default Editor;
