import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 text-center text-slate-500 text-xs sm:text-sm border-t border-slate-200/50 relative z-10">
      <div className="max-w-md mx-auto space-y-1.5 font-medium">
        <p className="text-slate-700 font-semibold text-base">
          Made with 🤍
        </p>
        <p className="text-slate-500 text-xs sm:text-sm">
          From Abhirami to You
        </p>
      </div>
    </footer>
  );
};
