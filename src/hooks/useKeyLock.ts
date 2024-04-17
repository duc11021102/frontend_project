/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

type KeyLock = "CapsLock" | "NumLock" | "ScrollLock";

export const useKeyLock = (targetKey: KeyLock) => {
  const [isKeyLocked, setIsKeyLocked] = useState(false);

  const checkKeyState = (event: KeyboardEvent) => {
    // EVENT.GETMODIFIERSTATE(TARGETKEY) TRẢ VỀ TRUE NẾU PHÍM TARGETKEY ĐC NHẤN XUỐNG , FALSE NẾU KHÔNG
    if (event.key !== targetKey) {
      setIsKeyLocked(event.getModifierState(targetKey));
      return;
    }

    setIsKeyLocked(!event.getModifierState(targetKey));
  };

  useEffect(() => {
    window.addEventListener("keydown", checkKeyState);

    return () => {
      window.removeEventListener("keydown", checkKeyState);
    };
  }, []);

  return isKeyLocked;
};
