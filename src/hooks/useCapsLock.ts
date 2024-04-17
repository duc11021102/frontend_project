import { useState, useEffect } from "react";

function useCapsLock() {
  const [capsLockOn, setCapsLockOn] = useState(false);

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      const capsLockOn = event.getModifierState("CapsLock");
      setCapsLockOn(capsLockOn);
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return capsLockOn;
}

export default useCapsLock;
