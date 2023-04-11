import { FileUploader } from 'react-drag-drop-files';

const fileTypes = [
  'JPG',
  'PNG',
  'GIF',
  'MP4',
  'PDF',
  'DOC',
  'DOCX',
  'PPT',
  'PPTX',
  'PSD',
  'AI',
];

const DragNDrop = ({ handleChange }) => {
  return (
    <FileUploader
      handleChange={handleChange}
      types={fileTypes}
    >
      <div className="w-fit px-5 md:w-full h-40 bg-red/5 mb-5 rounded-lg border-2 border-dashed border-[#666666] flex flex-col items-center justify-center font-sans text-lg cursor-pointer">
        <p className="mb-2">
          Drag & drop files or{' '}
          <span className="text-red underline">Browse</span>
        </p>
        <p className="text-gray-500">
          Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
        </p>
      </div>
    </FileUploader>
  );
};

export default DragNDrop;
