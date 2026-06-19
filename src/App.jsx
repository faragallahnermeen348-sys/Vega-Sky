import React from 'react';
import Hero from './components/Hero';
import Pillars from './components/Pillars';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Pillars />
    </div>
  );
}