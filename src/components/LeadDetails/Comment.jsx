export default function Comment({ author, date, comment }) {
  return (
    <li className="py-2 px-4 border-l-2 border-blue-600 mb-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">{author}</span>
        <span className="text-xs text-text-secondary">{date}</span>
      </div>
      <p className="text-sm text-text-secondary mt-1">{comment}</p>
    </li>
  );
}
