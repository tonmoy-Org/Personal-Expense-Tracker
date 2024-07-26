import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsOfService: React.FC = () => {
    return (
        <Container sx={{ mt: 11, mb: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                Terms of Service
            </Typography>
            <Box sx={{ mb: 2 }}>
                <Typography variant="body1" paragraph>
                    <strong>Effective Date:</strong> [7-26-2024]
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>1. Acceptance of Terms</strong>
                    <br />
                    By accessing or using Personal Expense Tracker ("we," "our," or "us"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>2. Use of Services</strong>
                    <br />
                    You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You are responsible for ensuring that your use of our services does not violate any applicable laws or regulations.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>3. Account Registration</strong>
                    <br />
                    To use certain features of our services, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>4. Intellectual Property</strong>
                    <br />
                    All content and materials provided through our services, including text, graphics, logos, and software, are the property of Personal Expense Tracker or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or otherwise use any such content without our express written permission.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>5. User Content</strong>
                    <br />
                    You are solely responsible for any content you submit or post on our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, and distribute such content in connection with our services.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>6. Prohibited Activities</strong>
                    <br />
                    You agree not to engage in any of the following prohibited activities:
                    <br />
                    - Using our services for any unlawful purpose or in any way that could damage, disable, or impair our services.
                    <br />
                    - Attempting to gain unauthorized access to any portion of our services or related systems.
                    <br />
                    - Interfering with or disrupting the operation of our services or servers.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>7. Limitation of Liability</strong>
                    <br />
                    To the maximum extent permitted by law, Personal Expense Tracker shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services. Our total liability to you for any claim arising out of or relating to these Terms of Service shall not exceed the amount you paid, if any, for using our services.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>8. Termination</strong>
                    <br />
                    We may terminate or suspend your access to our services at any time, with or without cause or notice, if we believe you have violated these Terms of Service or for any other reason.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>9. Changes to Terms</strong>
                    <br />
                    We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on our website. Your continued use of our services after any changes constitutes your acceptance of the updated Terms.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>10. Governing Law</strong>
                    <br />
                    These Terms of Service shall be governed by and construed in accordance with the laws of [insert governing law jurisdiction], without regard to its conflict of law principles.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>11. Contact Us</strong>
                    <br />
                    If you have any questions or concerns about these Terms of Service, please contact us at [insert contact email].
                </Typography>
            </Box>
        </Container>
    );
};

export default TermsOfService;
