import '@/styles/components/loader.scss';

export const PageLoader = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="spinner">
        <div className="bg-muted-foreground absolute rounded-full s-full"></div>
        <div className="bg-muted-foreground absolute rounded-full s-full"></div>
        <div className="bg-muted-foreground absolute rounded-full s-full"></div>
        <div className="bg-muted-foreground absolute rounded-full s-full"></div>
      </div>
    </div>
  );
};
