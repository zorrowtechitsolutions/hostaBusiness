import React, { createContext, useContext, useState } from "react";

type DrawerContextType = {
  showDrawer: boolean;
  setShowDrawer: (open: boolean) => void;
};

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined,
);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ showDrawer, setShowDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
}
