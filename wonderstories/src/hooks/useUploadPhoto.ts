import { useState } from 'react';

export default function useUploadPhoto() {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    setFile(f);
  };

  const uploadArea = (
    <div
      onDrop={onDrop}
      onDragOver={e => e.preventDefault()}
      className="border-dashed border-2 p-4 text-center"
    >
      Arrastra la foto aquí
    </div>
  );

  return { file, uploadArea };
}
