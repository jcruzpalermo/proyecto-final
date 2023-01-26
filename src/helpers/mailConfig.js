import {
    createTransport
} from "nodemailer";
import logger from "./logger.js";

const mailConfig = {
    name: "JCP",
    user: "jcruzpalermo@gmail.com",
    password: "Juan200796",
};

const transporter = createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: mailConfig.user,
        pass: mailConfig.password,
    },
});

export const sendMail = async (user) => {
    const mailOptions = {
        from: "JCP",
        to: mailConfig.user,
        subject: "JCP",
        html: `<h1>A user named '${user}' created an account in JCP.</h1>`,
    };

    const info = await transporter.sendMail(mailOptions);
    logger.info(info);
};