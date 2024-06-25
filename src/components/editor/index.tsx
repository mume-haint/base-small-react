import React from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

interface EditorProps {
  value: string;
  onChange: (...value: unknown[]) => void;

  [key: string]: unknown;
}

const EditorContainer = styled(Box)(({ theme }) => ({
  '& .ck-editor__editable': {
    minHeight: 300,
    backgroundColor: `${theme.palette.background.default} !important`,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2),
  },
  '& .ck-toolbar': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '& .ck-button': {
    color: theme.palette.text.primary,
  },
}));

const Editor: React.FC<EditorProps> = ({value, onChange, ...other}) => {

  return (
    <EditorContainer>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(_event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        {...other}
      />
    </EditorContainer>

  );
};

export default Editor;
