import React, { useState } from 'react';
import useUploadPhoto from '../hooks/useUploadPhoto';

export default function StoryWizard() {
  const [step, setStep] = useState(1);
  const { uploadArea, file } = useUploadPhoto();

  const next = () => setStep(s => s + 1);

  return (
    <div className="p-4">
      {step === 1 && (
        <div>
          {uploadArea}
          {file && <img src={URL.createObjectURL(file)} className="w-32 h-32 rounded-full" />}
          <button onClick={next}>Siguiente</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <p>Elegir tema (TODO)</p>
          <button onClick={next}>Confirmar</button>
        </div>
      )}
      {step === 3 && <p>Generando tu cuento...</p>}
    </div>
  );
}
