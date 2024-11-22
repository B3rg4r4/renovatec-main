export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500 to-black text-white">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-solid"></div>
      </div>
      <p className="text-lg font-bold text-yellow-500 mt-4">Carregando...</p>
    </div>
  );
}
