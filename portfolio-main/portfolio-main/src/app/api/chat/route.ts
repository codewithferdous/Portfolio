import { NextRequest, NextResponse } from 'next/server';

import { buildPortfolioContext } from '@/common/lib/portfolio-context';

const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface GeminiErrorResponse {
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set in environment variables.');
      return NextResponse.json(
        {
          error:
            'AI assistant is not configured. Please contact the site owner.',
        },
        { status: 503 },
      );
    }

    const body = await req.json();
    const messages: ChatMessage[] = body.messages;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required.' },
        { status: 400 },
      );
    }

    const systemPrompt = buildPortfolioContext();

    const geminiContents = messages.map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }],
        },
        contents: geminiContents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512,
          topP: 0.9,
        },
      }),
    });

    if (!response.ok) {
      const errorData: GeminiErrorResponse | null = await response
        .json()
        .catch(() => null);
      const status = errorData?.error?.code ?? response.status;
      const errorStatus = errorData?.error?.status ?? '';

      console.error(
        'Gemini API error:',
        status,
        errorStatus,
        errorData?.error?.message,
      );

      if (status === 429 || errorStatus === 'RESOURCE_EXHAUSTED') {
        return NextResponse.json(
          {
            error:
              'The AI assistant is temporarily busy. Please wait a minute and try again.',
          },
          { status: 429 },
        );
      }

      if (status === 400) {
        return NextResponse.json(
          { error: 'Invalid request. Please try rephrasing your question.' },
          { status: 400 },
        );
      }

      if (status === 403) {
        return NextResponse.json(
          {
            error:
              'AI assistant access denied. The API key may be invalid or restricted.',
          },
          { status: 503 },
        );
      }

      return NextResponse.json(
        { error: 'Failed to get a response from the AI. Please try again.' },
        { status: 502 },
      );
    }

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I could not generate a response. Please try again.';

    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    );
  }
}
