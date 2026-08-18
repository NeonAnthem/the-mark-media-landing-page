/**
 * Reel Video Card Component
 * @description A component that displays a reel card with video content.
 * @returns JSX
 */
function ReelVideoCard() {
  return (
    <div>
      <video
        src="/assets/videos/horux-campaign.mp4"
        className="rounded-xl w-0 h-0 lg:w-75 lg:h-132.5 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

/**
 * Reel Card Component
 * @description A component that displays a image reel card.
 * @returns JSX
 */
function ReelCard() {
  return null;
}

export { ReelCard, ReelVideoCard };
