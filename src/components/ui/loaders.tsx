import '@/styles/components/loader.scss';

export const PageLoader = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="loader">
        <div className="bg-muted-foreground absolute rounded-full size-full"></div>
        <div className="bg-muted-foreground absolute rounded-full size-full"></div>
        <div className="bg-muted-foreground absolute rounded-full size-full"></div>
        <div className="bg-muted-foreground absolute rounded-full size-full"></div>
      </div>
    </div>
  );
};
