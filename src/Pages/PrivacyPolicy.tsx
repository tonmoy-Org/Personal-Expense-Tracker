import React from 'react';
import { Container, Typography} from '@mui/material';

const PrivacyPolicy: React.FC = () => {
    return (
        <Container sx={{ mt: 11, mb: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Effective Date:</strong> [Insert Date]
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>1. Introduction</strong>
                <br />
                Welcome to Personal Expense Tracker ("we," "our," or "us"). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about you when you use our website and services.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>2. Information We Collect</strong>
                <br />
                <ul>
                    <li><strong>Personal Information:</strong> We may collect personal information that you provide directly to us, such as your name, email address, and financial information.</li>
                    <li><strong>Usage Data:</strong> We collect information about your interactions with our services, including your IP address, browser type, and usage patterns.</li>
                    <li><strong>Cookies:</strong> We use cookies and similar technologies to collect information about your use of our website and to enhance your experience.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>3. How We Use Your Information</strong>
                <br />
                We use the information we collect to:
                <ul>
                    <li>Provide and improve our services.</li>
                    <li>Communicate with you and respond to your inquiries.</li>
                    <li>Personalize your experience.</li>
                    <li>Monitor and analyze usage and trends.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>4. Sharing Your Information</strong>
                <br />
                We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                <ul>
                    <li>With your consent.</li>
                    <li>To comply with legal obligations.</li>
                    <li>To protect and defend our rights and property.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>5. Data Security</strong>
                <br />
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>6. Your Choices</strong>
                <br />
                You have the right to:
                <ul>
                    <li>Access, correct, or delete your personal information.</li>
                    <li>Opt-out of receiving marketing communications from us.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>7. Changes to This Privacy Policy</strong>
                <br />
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>8. Contact Us</strong>
                <br />
                If you have any questions or concerns about this Privacy Policy or our practices, please contact us at [insert contact email].
            </Typography>
        </Container>
    );
};

export default PrivacyPolicy;
