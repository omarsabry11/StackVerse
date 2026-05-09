import { Resend } from "resend";

const resend = new Resend("re_hJgfCKjX_PFKGmAJ8usVvdoBDqtz4FN2K");

export async function POST(req) {
    try {
        const body = await req.json();

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "stackverse01@gmail.com",
            subject: `New Contact Message From ${body.name}`,
            html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Course:</strong> ${body.course}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}