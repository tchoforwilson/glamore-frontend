export default function BestValueCard({ img, title, description }) {
  return (
    <div className="best-value-card">
      <div className="bg-slate-200 rounded-lg overflow-hidden aspect-square grid place-content-center">
        <img
          src={img}
          alt={title}
          className="size-full object-cover object-center"
        />
      </div>

      <h4 className="text-xl font-bold mt-4">{title}</h4>
      <div className="text-light">{description}</div>
    </div>
  );
}
