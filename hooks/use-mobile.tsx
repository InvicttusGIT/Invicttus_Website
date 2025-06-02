// import * as React from "react"

// const MOBILE_BREAKPOINT = 768

// export function useIsMobile() {
//   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

//   React.useEffect(() => {
//     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
//     const onChange = () => {
//       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
//     }
//     mql.addEventListener("change", onChange)
//     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
//     return () => mql.removeEventListener("change", onChange)
//   }, [])

//   return !!isMobile
// }
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768; // <768 = mobile
const TABLET_BREAKPOINT = 1024; // 768–1023 = tablet

type DeviceType = "mobile" | "tablet" | "desktop";

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  useEffect(() => {
    const determineDeviceType = () => {
      const width = window.innerWidth;
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType("mobile");
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    determineDeviceType();

    window.addEventListener("resize", determineDeviceType);
    return () => window.removeEventListener("resize", determineDeviceType);
  }, []);

  return deviceType;
}
