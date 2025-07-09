const NotFoundPage = () => {
  return (
    <div className="flex h-screen items-center justify-center text-center p-4">
      <div>
        <h1 className="text-5xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export { NotFoundPage };
