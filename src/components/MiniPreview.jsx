import preview1 from "/map.jpg";
import preview2 from "/robot2.jpg";

function MiniPreview({ activeFeed, setActiveFeed }) {

  const switchFeed = () => {

    if (activeFeed === preview1) {
      setActiveFeed(preview2);
    } else {
      setActiveFeed(preview1);
    }

  };

  const previewImage =
    activeFeed === preview1 ? preview2 : preview1;

  return (

    <div className="absolute bottom-4 left-16 z-50">

      <div
        className="
          w-72
          h-44
          rounded-2xl
          overflow-hidden
          border
          border-cyan-400/30
          bg-black
          relative
          shadow-2xl
        "
      >

        <img
          src={previewImage}
          alt="Preview"
          className="w-full h-full object-cover"
        />

        <div
          className="
            absolute
            top-2
            left-2
            text-cyan-300
            text-xs
            font-bold
            bg-black/70
            px-2
            py-1
            rounded
          "
        >
          LIVE FEED
        </div>

        <button
          onClick={switchFeed}
          className="
            absolute
            bottom-2
            left-2
            text-white
            text-xs
            bg-black/70
            px-3
            py-1
            rounded
            hover:bg-cyan-500
            transition
          "
        >
          Switch Feed
        </button>

      </div>

    </div>

  );

}

export default MiniPreview;