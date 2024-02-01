const Photo = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/Images/Gallery/image2.jpg"
              alt=""
            />
          </div>
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/Images/Gallery/image1.jpg"
              alt=""
            />
          </div>
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/Images/Gallery/image1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt="/"
            />
          </div>
          <div data-aos="zoom-in">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
