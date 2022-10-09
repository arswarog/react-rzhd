import React, { ReactNode } from 'react';

import './Section.css';

interface ISectionProps {
    title?: string;
    children: ReactNode;
}

export const Section = ({ children }: ISectionProps) => <section className="section">{children}</section>;

export const SectionLeftContent = ({ title, children }: ISectionProps) => (
    <div className="section__left-content">
        <h3 className="section__title">{title}</h3>
        {children}
    </div>
);

export const SectionRightContent = ({ title, children }: ISectionProps) => (
    <div className="section__right-content">
        <h3 className="section__title">{title}</h3>
        {children}
    </div>
);
