function CameraView({ activeFeed }) {

  return (

    <div className="absolute inset-0 z-0">

      <img
        src={activeFeed}
        alt="Camera Feed"
        className="w-full h-full object-cover opacity-40"
      />

    </div>

  );

}

export default CameraView;