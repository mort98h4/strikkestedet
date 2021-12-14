import Image from 'next/image';

export default function CustomerReview(props) {
    const review = props.node.customerreview;

    function getStarsArray(num) {
        let stars = [];
        for (let i = 1; i <= num; i++) {
          stars.push(i);
        }
        return stars;
    }

    return (
      <>
        <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8 flex flex-wrap">
            <div>
                <h3 className="font-serif text-xl lg:text-3xl mb-4">{review.customerName}</h3>
                <p className="text-black-60 mb-8">{review.customerReview}</p>
            </div>
            <div className="self-end">
                <h4 className="font-sans text-lg font-bold">Trustpilot</h4>
                {getStarsArray(review.trustpilotStars).map((star) => {
                    return (
                        <Image height="32" width="32" key={props.node.id + "-" + star.toString()} src="/review_star.svg"
                        className="inline-block mr-2"></Image>
                    )
                })}
            </div>
        </div>
      </>
    )
  }