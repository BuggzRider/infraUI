import Image from "next/image";
import { useEffect, useState } from "react";

const NextImageWithFallback = ({ fallback = "", alt, src, ...props }: any) => {
  const [customSrc, setSrc] = useState("");
  const handleError = () => {
    setSrc(fallback);
  };

  useEffect(() => {
    setSrc(src);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={handleError}
      src={customSrc}
      {...props}
    />
  );
};

export default NextImageWithFallback;
