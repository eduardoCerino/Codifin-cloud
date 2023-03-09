import { faFilePdf, faFileWord, faFileExcel, faFile } from '@fortawesome/free-solid-svg-icons';

export const fileIcons = {
  pdf: faFilePdf,
  doc: faFileWord,
  docx: faFileWord,
  xlsx: faFileExcel,
  default: faFile,
};

export const getFileIconColor = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return { color: '#f03629' };
      case 'doc':
      case 'docx':
        return { color: '#1d90f5' };
      case 'xlsx':
        return { color: '#1cba46' };
      default:
        return { color: 'black' };
    }
  };