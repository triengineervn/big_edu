import Icon from "../../assets/images/icons";

const ReviewItem = () => {
  return (
    <div className="p-8 border bg-white m-2">
      <div>
        <Icon name="quote" />
        <h2>
          I am proud to say that after a few months of taking this course...I
          passed my exam and am now an AWS Certified Cloud Practitioner! This
          content was exactly what the CCP exam covered.
        </h2>
        <div className="flex items-center -ml-2">
          <div className="font-bold p-2 bg-gray-700 rounded-full text-white mt-4 m-2">
            WA
          </div>
          <h2 className="font-bold">Will A</h2>
        </div>
      </div>
      <a
        href=""
        className="flex items-center border-t pt-4 mt-4"
      >
        <Icon
          name="play"
          className="pr-2"
        />
        <h2 className="font-bold leading-5 text-violet-700">
          [NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02
        </h2>
      </a>
    </div>
  );
};

export default ReviewItem;
