import { useEffect, useState } from 'react';
import './progress-bar.css';

export const ProgressBar = () => {
  const handleScroll = () => document.documentElement.style.setProperty('--progress-width', `${window.pageYOffset/80}%`);;
  let body = document.body;
  let html = document.documentElement;
  let height = Math.max( body.scrollHeight, body.offsetHeight, 
      html.clientHeight, html.scrollHeight, html.offsetHeight );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const width = getComputedStyle(document.documentElement).getPropertyValue('--progress-width');
    console.log(width);
    console.log(height);
    console.log(window);
    // window.scrollbars.visible = false;
  }, [height])

  return (
    <div className="progress-bar">
      <div className="progress-bar__progress"></div>
    </div>
  )  
}