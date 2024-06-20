import React from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface EditorProps {
  value: string;
  onChange: (...value: any[]) => void;
  [key: string]: unknown;
}

const Editor: React.FC<EditorProps> = ({ value, onChange, ...other }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(_event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
      {...other}
    />
  );
};

export default Editor;
