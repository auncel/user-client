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
  uKey: string;
}

const editorMap = new Map<string, monaco.editor.IStandaloneCodeEditor>();

export const Editor: React.FC<IEditorProps> = (props) => {
  const { value, lang, uKey } = props;
  const editorDomRef = useRef(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  useEffect(() => {
    const editor = monaco.editor.create(editorDomRef.current!, {
      value,
      language: lang,
      lineNumbers: 'on',
      scrollbar: {
        horizontal: 'visible',
      },
      lineHeight: 24,
    });
    console.log('key', uKey);
    editorMap.set(uKey, editor);
  }, [uKey]);
  return (
    <div style={{ width: '50%', height: '350px' }}>
      <div style={{ height: '350px' }} ref={editorDomRef} />
    </div>
  );
};

export function getValue(key: string): string {
  return editorMap.get(key)?.getValue() ?? '';
}

export default Editor;
