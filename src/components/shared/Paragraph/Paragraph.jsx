function Paragraph({ p, text = "justify" }) {
  // لو p عبارة عن array نعمل map عليها
  if (Array.isArray(p)) {
    return (
      <div className="space-y-2">
        {p.map((para, index) => (
          <p
            key={index}
            className={`mt-2 sm:text-base paragraph 'text-'${text}`}
          >
            {para}
          </p>
        ))}
      </div>
    );
  }

  // لو p نص واحد فقط
  return (
    <p className={`mt-2 sm:text-base paragraph 'text-'${text}`}>
      {p}
    </p>
  );
}

export default Paragraph;