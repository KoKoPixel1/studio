import { NextResponse } from 'next/server';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10).max(500),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = formSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid form data.', details: result.error.flatten() }, { status: 400 });
    }

    // Here you would typically handle the form submission,
    // e.g., send an email, save to a database, etc.
    // For this example, we'll just log it and return success.
    console.log('Contact form submitted:', result.data);

    // Simulate a short delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
