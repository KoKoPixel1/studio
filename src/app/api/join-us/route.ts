import { NextResponse } from 'next/server';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  year: z.string(),
  department: z.string().min(2),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = formSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid application data.', details: result.error.flatten() }, { status: 400 });
    }

    // Here you would typically handle the form submission,
    // e.g., save to a database, add to a mailing list, etc.
    // For this example, we'll just log it and return success.
    console.log('Join Us application received:', result.data);

    // Simulate a short delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
