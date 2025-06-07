import React from 'react';

export default function BookViewer3D({ pages }) {
  return (
    <div>
      {/* TODO: Visor 3D de páginas */}
      {pages.map((p, i) => (
        <img key={i} src={p} alt={`page-${i}`} />
      ))}
    </div>
  );
}
