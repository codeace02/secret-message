import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {

    try {
        await resend.emails.send({
            from: 'admin@secret.dev',
            to: email,
            subject: 'Secret message | Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
        });

        console.log('inside send email');

        return { success: true, message: "Verification email send successfully!" }

    } catch (error) {
        console.log('Error sending verification email', error)
        return { success: false, message: "Failed to send verification email!" }
    }
}