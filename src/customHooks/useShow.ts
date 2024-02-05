import { useState, useEffect, MutableRefObject } from "react";

export const useShow = (ref: MutableRefObject<null>) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.75,
      }
    );

    // Assuming you have a ref to the target element, replace 'targetRef' with your actual ref
    const targetRef = ref;

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return { show };
};
