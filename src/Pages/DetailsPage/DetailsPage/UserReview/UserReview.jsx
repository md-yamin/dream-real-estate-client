const UserReview = ({review}) => {
    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 text-black ">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={review.userImg} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{review.reviewerName}</h4>
                            <span className="text-xs dark:text-gray-600">{review.reviewTime}</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>{review.reviewDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default UserReview;