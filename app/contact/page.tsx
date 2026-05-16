import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Muslim Will | Book A Call',
  description: 'Book a call with Muslim Will or start your will through a guided pathway designed for Muslim families in Canada.',
};

export default function ContactPage() {
  return <ContactClient />;
}
