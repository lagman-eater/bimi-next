import { useCallback, useState } from "react";

interface UseVideoProps {
  videoId: string;
  autoplay?: boolean;
}

export const useVideo = ({ videoId, autoplay = true }: UseVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadVideo = useCallback(
    (container: HTMLElement) => {
      if (isLoaded || isLoading) return;

      setIsLoading(true);
      setError(null);

      try {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("height", "100%");
        iframe.setAttribute(
          "src",
          `https://www.youtube.com/embed/${videoId}${
            autoplay ? "?autoplay=1" : ""
          }${autoplay ? "&" : "?"}rel=0&showinfo=0&modestbranding=1`
        );
        iframe.setAttribute("title", "BIMI Video");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; fullscreen");
        iframe.setAttribute("loading", "lazy");

        // Clear container and add iframe
        container.innerHTML = "";
        container.appendChild(iframe);

        setIsLoaded(true);
      } catch (err) {
        setError("Failed to load video");
        console.error("Video loading error:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [videoId, autoplay, isLoaded, isLoading]
  );

  const reset = useCallback(() => {
    setIsLoaded(false);
    setIsLoading(false);
    setError(null);
  }, []);

  return {
    loadVideo,
    isLoaded,
    isLoading,
    error,
    reset,
  };
};
