import React from 'react';

const RapidREST = ({ width = 72 }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width={width * 0.4} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          fill="url(#rapidrest-gradient)"
          stroke="none"
        />
        <defs>
          <linearGradient id="rapidrest-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
      <span style={{ 
        fontSize: width * 0.22,
        fontWeight: '700',
        background: 'linear-gradient(135deg, #3B82F6, #10B981)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.5px'
      }}>
        RapidREST
      </span>
    </div>
  );
};

const Bruno = ({ width }) => {
  return <RapidREST width={width} />;
};

export default Bruno;