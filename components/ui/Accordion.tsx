"use client";

import React, { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.accordionHeader} onClick={onClick} aria-expanded={isOpen}>
        <span className={styles.question}>{question}</span>
        <span className={styles.icon}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div className={styles.accordionContentWrapper}>
        <div className={styles.accordionContent}>
          <div className={styles.accordionContentInner}>
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: React.ReactNode }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
