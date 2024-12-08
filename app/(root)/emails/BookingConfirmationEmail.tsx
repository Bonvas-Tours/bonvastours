import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface BookingConfirmationEmailProps {
    name: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    city: string;
    additionalInfo?: string;
    tourTitle: string;
    tourOption: {
        startDate: string;
        endDate: string;
        prices: { adult: number; couple: number };
        quantities: { adult: number; couple: number };
    };
    total: number;
}

export const BookingConfirmationEmail = ({
    name,
    email,
    phone,
    address,
    country,
    city,
    additionalInfo,
    tourTitle,
    tourOption,
    total,
}: BookingConfirmationEmailProps) => {
    const previewText = `Booking Confirmation for ${tourTitle}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Img
                        src="https://bonvastours.com/img/TM%20Bonvas%20Tours%20Logo.png"
                        width="170"
                        alt="Bonvas Tours"
                        style={logo}
                    />
                    <Heading style={h1}>Booking Confirmation</Heading>
                    <Text style={text}>
                        Thank you for booking your tour with Bonvas Tours. We're excited to have you join us for the {tourTitle} experience!
                    </Text>
                    <Section style={section}>
                        <Heading style={h2}>Tour Details</Heading>
                        <Text style={text}>
                            <strong>Tour:</strong> {tourTitle}<br />
                            <strong>Start Date:</strong> {tourOption.startDate}<br />
                            <strong>End Date:</strong> {tourOption.endDate}<br />
                            {tourOption.quantities.adult > 0 && (
                                <>
                                    <strong>Adults:</strong> {tourOption.quantities.adult}<br />
                                </>
                            )}
                            {tourOption.quantities.couple > 0 && (
                                <>
                                    <strong>Couples:</strong> {tourOption.quantities.couple}<br />
                                </>
                            )}
                            <strong>Total Price:</strong> ${total.toFixed(2)}
                        </Text>
                    </Section>

                    <Section style={section}>
                        <Heading style={h2}>Your Information</Heading>
                        <Text style={text}>
                            <strong>Email:</strong> {email}<br />
                            <strong>Phone:</strong> {phone}<br />
                            <strong>Address:</strong> {address}<br />
                            <strong>Country:</strong> {country}<br />
                            <strong>City:</strong> {city}<br />
                            <strong>Additional Information:</strong> {additionalInfo || 'N/A'}
                        </Text>
                    </Section>
                    <Text style={text}>
                        If you have any questions or need to make changes to your booking, please don't hesitate to contact us at info@bonvastours.com or call us at +233 55 120 1245.
                    </Text>
                    <Text style={text}>We look forward to providing you with an unforgettable tour experience!</Text>
                    <Hr style={hr} />
                    <Text style={footer}>Bonvas Tours | Kumasi, Ghana | www.bonvastours.com</Text>
                </Container>
            </Body>
        </Html>
    );
};

export default BookingConfirmationEmail;

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 48px',
    marginBottom: '64px',
};

const logo = {
    margin: '0 auto',
    marginBottom: '32px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    margin: '30px 0',
};

const h2 = {
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '30px 0 10px',
};

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '16px 0',
    padding: '10px'
};

const section = {
    backgroundColor: '#f7f9fc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center' as const,
};

