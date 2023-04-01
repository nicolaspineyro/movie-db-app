const LoadingSpinner = () => {
  return (
    <span className="relative flex h-5 w-5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-dark opacity-75"></span>
      <span className="relative inline-flex rounded-full h-5 w-5 bg-gray-dark"></span>
    </span>
  );
};

export default LoadingSpinner;
