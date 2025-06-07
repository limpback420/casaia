import React from 'react';

export default function TemplateCard({ template, onSelect }) {
  return (
    <div
      onClick={() => onSelect(template)}
      className="p-4 bg-white rounded shadow hover:shadow-lg transition"
    >
      <img src={template.hero_url} alt={template.title} className="rounded" />
      <h3 className="mt-2 text-center">{template.title}</h3>
    </div>
  );
}
