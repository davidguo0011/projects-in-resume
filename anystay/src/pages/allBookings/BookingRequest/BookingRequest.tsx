import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

import {
    BookingRequestWrapper,
    BookingRequestTitle,
    BookingRequestSubtitle,
    BookingRequestRespondButton,
    BookingRequestContentTextWrapper,
    BookingRequestContentWrapper,
    BookingRequestContentText,
    BookingRequestGuestProfilePicture,
    BookingRequestGuestProfilePictureWrapper,
} from "../../dashboard/dashboardStyling";
import { BookingRequestContainerWrapper } from "../allBookingsStyling";
import SkeletonLoadingDummyHostBooking from "../../../components/skeletonLoadingDummyCard/skeletonLoadingDummyHostBooking/skeletonLoadingDummyHostBooking";
import { UserModel } from "../../../interfaces/models/userModel";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ChangeBookingRequestModel } from "../../../interfaces/models/changeBookingRequestModel";
import { ListingModel } from "../../../interfaces/models/listingModel";
import constructOptimisedProtectedImageUrl from "../../../utils/imageOptimisation/constructOptimisedProtectedImageUrl";

interface ExtendedBookingRequestModel extends BookingRequestModel {
    changeBookingRequestModel: ChangeBookingRequestModel[];
    userModel: UserModel;
    status: string;
    daysUntilArrival: number;
    daysUntilDeparture: number;
    expiryTime: number;
    listingModel: ListingModel;
}
interface BookingRequestProps {
    bookingRequest: ExtendedBookingRequestModel;
    delay: number;
}

const BookingRequest: React.FC<BookingRequestProps> = ({ bookingRequest, delay }) => {
    const [guestProfilePicture, setGuestProfilePicture] = useState("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const guestData = bookingRequest.userModel;
        if (guestData && guestData.profilePicture) {
            const guestProfilePic = constructOptimisedProtectedImageUrl(guestData.profilePicture, guestData.identityID, 100);
            setGuestProfilePicture(guestProfilePic);
        }
    }, [bookingRequest.userModel]);

    // Guest Review Pending
    // Stay Review Pending

    const getForamttedDateRange = useCallback(() => {
        let arrivalDate: Date | string = new Date(bookingRequest.arrivalDate.replace("Z", ""));
        let departureDate: Date | string = new Date(bookingRequest.departureDate.replace("Z", ""));
        arrivalDate = arrivalDate.toString().split(" ").slice(1, 3).reverse().join(" ");
        departureDate = departureDate.toString().split(" ").slice(1, 3).reverse().join(" ");
        bookingRequest.changeBookingRequestModel.forEach((changeBookingRequestModel) => {
            if (!changeBookingRequestModel.completed && !changeBookingRequestModel.confirmed) {
                arrivalDate = new Date(changeBookingRequestModel.newArrivalDate.replace("Z", ""));
                departureDate = new Date(changeBookingRequestModel.newDepartureDate.replace("Z", ""));
                arrivalDate = arrivalDate.toString().split(" ").slice(1, 3).reverse().join(" ");
                departureDate = departureDate.toString().split(" ").slice(1, 3).reverse().join(" ");
            }
        });
        return `${arrivalDate} - ${departureDate}`;
    }, [bookingRequest]);

    const getBookingRequestTitle = () => {
        if (bookingRequest.status === "Confirmed") {
            if (bookingRequest.daysUntilArrival === 0 && bookingRequest.daysUntilDeparture === 0) {
                return <span style={{ color: ColorTheme.Black.color }}>Departing today</span>;
            } else if (bookingRequest.daysUntilArrival > 0) {
                return <span style={{ color: ColorTheme.Black.color }}>Arriving in {bookingRequest.daysUntilArrival} days</span>;
            } else if (bookingRequest.daysUntilDeparture > 0) {
                return <span style={{ color: ColorTheme.Black.color }}>Departing in {bookingRequest.daysUntilDeparture} days</span>;
            }
        }
        if (bookingRequest.status === "Overdue") {
            return <span style={{ color: ColorTheme.Black.color }}>Overdue</span>;
        }
        if (bookingRequest.status === "Change Requested") {
            return <span style={{ color: ColorTheme.Yellow.color }}>Changes requested</span>;
        }
        if (bookingRequest.status === "Refund Requested") {
            return <span style={{ color: ColorTheme.Yellow.color }}>Refund requested</span>;
        }
        if (bookingRequest.status === "Booking Requested") {
            return <span style={{ color: ColorTheme.Yellow.color }}>Expires in {bookingRequest.expiryTime} hours</span>;
        }
        if (bookingRequest.status === "Review Pending" || bookingRequest.status === "Guest Review Pending") {
            return <span style={{ color: ColorTheme.Black.color }}>Review guest</span>;
        }
        if (bookingRequest.status === "Reviewed" || bookingRequest.status === "Stay Review Pending") {
            return <span style={{ color: ColorTheme.Black.color }}>Reviewed</span>;
        }
        if (bookingRequest.status === "Cancelled") {
            return <span style={{ color: ColorTheme.Black.color }}>Cancelled</span>;
        }
        if (bookingRequest.status === "Declined") {
            return <span style={{ color: ColorTheme.Black.color }}>Declined</span>;
        }
    };

    const getBookingRequestRespondBtn = () => {
        if (bookingRequest.status === "Confirmed") {
            return (
                <BookingRequestRespondButton style={{ background: ColorTheme.Black.color }} to={`/booking-request/${bookingRequest.id}`}>
                    Details
                </BookingRequestRespondButton>
            );
        }
        if (bookingRequest.status === "Reviewed" || bookingRequest.status === "Review Pending" || bookingRequest.status === "Guest Review Pending") {
            return (
                <BookingRequestRespondButton style={{ background: ColorTheme.Black.color }} to={`/booking-request/${bookingRequest.id}`}>
                    {bookingRequest.status === "Reviewed" ? "Reviewed" : "Review guest"}
                </BookingRequestRespondButton>
            );
        }
        if (bookingRequest.status === "Cancelled" || bookingRequest.status === "Declined") {
            return (
                <BookingRequestRespondButton style={{ background: ColorTheme.Black.color }} to={`/booking-request/${bookingRequest.id}`}>
                    {bookingRequest.status}
                </BookingRequestRespondButton>
            );
        }
        if (bookingRequest.status === "Booking Requested") {
            return (
                <BookingRequestRespondButton style={{ background: ColorTheme.Yellow.color }} to={`/booking-request/${bookingRequest.id}`}>
                    Stay requested
                </BookingRequestRespondButton>
            );
        }
        if (bookingRequest.status === "Overdue") {
            return (
                <BookingRequestRespondButton style={{ background: ColorTheme.Black.color }} to={`/booking-request/${bookingRequest.id}`}>
                    Expired
                </BookingRequestRespondButton>
            );
        }
        return (
            <BookingRequestRespondButton
                style={{ background: `${bookingRequest.status === "Overdue" ? ColorTheme.Black.color : ColorTheme.Yellow.color}` }}
                to={`/booking-request/${bookingRequest.id}`}
            >
                Respond
            </BookingRequestRespondButton>
        );
    };

    if (!bookingRequest) return null;
    return (
        <BookingRequestContainerWrapper>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, display: complete ? "none" : "block" }}
                transition={{ duration: 0.2, delay: delay }}
                onAnimationComplete={() => setComplete(true)}
            >
                <div style={{ position: "absolute", top: "0", left: "0", width: "100%", zIndex: "11" }}>
                    <SkeletonLoadingDummyHostBooking />
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: delay }}>
                <BookingRequestWrapper>
                    <BookingRequestTitle>
                        {getBookingRequestTitle()}
                        {bookingRequest.status === "Change Requested" && <span style={{ color: ColorTheme.Yellow.color }}>{bookingRequest.expiryTime}h</span>}
                    </BookingRequestTitle>
                    <BookingRequestSubtitle>{bookingRequest.listingModel.propertyTitle}</BookingRequestSubtitle>
                    <BookingRequestContentWrapper>
                        <BookingRequestContentTextWrapper>
                            <BookingRequestContentText>{bookingRequest.userModel.firstName}</BookingRequestContentText>
                            <BookingRequestContentText>{getForamttedDateRange()}</BookingRequestContentText>
                        </BookingRequestContentTextWrapper>
                        <BookingRequestGuestProfilePictureWrapper>
                            <BookingRequestGuestProfilePicture src={guestProfilePicture} alt={"Guest profile picture"} />
                        </BookingRequestGuestProfilePictureWrapper>
                    </BookingRequestContentWrapper>
                    {getBookingRequestRespondBtn()}
                </BookingRequestWrapper>
            </motion.div>
        </BookingRequestContainerWrapper>
    );
};
export default BookingRequest;
